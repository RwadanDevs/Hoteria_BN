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
            orders = await orderService.findByWaiter({ creator_id : id })
        }else if(role === "BAR" || role === "COOK"){
            orders = await orderService.findByProcessor({ processor : role })
        }else{
            orders = await orderService.getAllOrders()
        }

        utils.setSuccess(200,'Fetch Success',orders.reverse())
        return utils.send(res)
    }

    static async getSpecificOrder(req,res){
        const { order_id } = req.params;
        const order = await orderService.findById(order_id)

        if(!order){
            utils.setError(404,'order not Found')
            return utils.send(res)
        }

        const item = await itemServices.findById(order.item);
        const { photoUrl,name,price } = item.dataValues;

        utils.setSuccess(200,'Fetch Successful',{...order.dataValues,photoUrl,name,price })
        return utils.send(res)
    }

    static async createAnOrder(req,res){
        const { item,itemCount } = req.body; 
        const { id,username } = req.userData;

        const exist = await itemServices.findById(item);

        if(!exist){
            utils.setError(404,`Item_id ${item} was not Found`)
            return utils.send(res)
        }
        
        const neworder = await orderService.createOrder({
            creator_id:id,
            creator_name:username,
            total_cost:exist.dataValues.price*itemCount,
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

        if( req.body.status !== "pending"  && exist.dataValues.creator_id !== parseInt(id)  ){
            utils.setError(403,`This is ${role+" "+username}'s order`)
            return utils.send(res)
        }

        await orderService.updateAtt(req.body,{ id:order_id });

        if(req.body.prep_Status !== "pending" && req.body.status === "pending"){
            req.io.emit('updated_order',req.body);
        }

        utils.setSuccess(200,'order Updated',{
            ...exist.dataValues,
            ...req.body,
            updateAtt: new Date()
        })
        return utils.send(res)
    }

    static async deleteAnOrder(req,res){
        const { order_id } = req.params;
        const { id,username } = req.userData;
        const order = await orderService.findById(order_id)

        if( parseInt(id) !== order.dataValues.creator_id ){
            utils.setError(403,`this is ${username}'s order not yours`)
            return utils.send(res)
        }

        await orderService.deleteAtt(order_id)

        utils.setSuccess(200,'order Deleted',order_id)
        return utils.send(res)
    }
}
