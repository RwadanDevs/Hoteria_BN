import Util from '../helpers/util';
import orderService from '../services/orderService';
import itemServices from '../services/itemservice';

const utils = new Util()

export default class orders{
    static async getAllOrders(req,res){
        const { status } = req.query;
        const { id,role } = req.userData;
        let orders;

        if(role === 'WAITER'){
            const found = await orderService.findByWaitor({ creator_id : id })
            status !== undefined ?
            orders = found.filter(order=>order.dataValues.status === status) :
            orders = found
        }else{
            status !== undefined ?
            orders = await orderService.getByStatus(status) :
            orders = await orderService.getAllOrders()
        }

        utils.setSuccess(200,'Fetch Success',orders.reverse())
        return utils.send(res)
    }

    static async getSpecificOrder(req,res){
        const { order_id } = req.params;
        const { origin_id,origin_type,role } = req.userData;
        const order = await orderService.findById(order_id)

        if(!order){
            utils.setError(404,'order not Found')
            return utils.send(res)
        }

        if( role == 'GUEST' && origin_id !== order.dataValues.origin_id ){
            const Error = {
                message:'Ownership Restriction',
                tip:`this order is from ${order.dataValues.origin_type} ${order.dataValues.origin_id} and you are ${origin_type} ${origin_id}`
            }
            utils.setError(403,Error)
            return utils.send(res)
        }

        let { items } = order.dataValues;
        items = JSON.parse(items);
        const data  = [];

        for(const item of items){
            const exist = await itemServices.findById(item)
            data.push(exist.dataValues)
        }

        utils.setSuccess(200,'Fetch Successful',{ order: order.dataValues, items : data })
        return utils.send(res)
    }

    static async createAnOrder(req,res){
        const { item } = req.body; 
        const { id,username } = req.userData;

        const exist = await itemServices.findById(item);

        if(!exist){
            utils.setError(404,`Item_id ${item} was not Found`)
            return utils.send(res)
        }
        
        const neworder = await orderService.createOrder({
            creator_id:id,
            creator_name:username,
            ...req.body
        })

        req.io.emit('new_order',neworder.dataValues);

        utils.setSuccess(201,'order Created',neworder.dataValues);
        return utils.send(res)
    }
 
    static async updateAnOrder(req,res){
        const { order_id } = req.params;
        const { username,id,role } = req.userData;
        const exist = await orderService.findById(order_id);

        if(!exist){
            utils.setError(404,'order not Found')
            return utils.send(res)
        }

        if(exist.dataValues.status !== 'pending'){
            utils.setError(400,'Order has Been Delivered')
            return utils.send(res)
        }

        if( req.body.status !== "pending"  && parseInt(exist.dataValues.creator_id) !== id  ){
            utils.setError(403,`this is ${role+" "+username}'s order`)
            return utils.send(res)
        }

        await orderService.updateAtt(req.body,{ id:order_id });

        utils.setSuccess(200,'order Updated',{
            ...exist.dataValues,
            ...req.body,
            updateAtt: new Date()
        })
        return utils.send(res)
    }

    static async deleteAnOrder(req,res){
        const { order_id } = req.params;
        const { origin_id,origin_type,role } = req.userData;
        const order = await orderService.findById(order_id)

        if(!order){
            utils.setError(404,'order not Found') 
            return utils.send(res)
        }

        if( role === 'GUEST' && origin_id !== order.dataValues.origin_id ){
            const Error = {
                message:'Ownership Restriction',
                tip:`this order is from ${order.dataValues.origin_type} ${order.dataValues.origin_id} and you are ${origin_type} ${origin_id}`
            }
            utils.setError(403,Error)
            return utils.send(res)
        }

        await orderService.deleteAtt(order_id)

        utils.setSuccess(200,'order Deleted')
        return utils.send(res)
    }
}
