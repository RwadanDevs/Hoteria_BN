import Util from '../helpers/util';
import orderService from '../services/orderService';
import itemServices from '../services/itemservice';

const utils = new Util()

export default class orders{
    static async getAllOrders(req,res){
        const { status } = req.query;
        const { origin_id,origin_type,role } = req.userData;
        let orders;

        if(role === 'GUEST'){
            const found = await orderService.findByOrigin({origin_id,origin_type})
            orders = found.filter(order=>order.dataValues.status === status)
        }else if(role !== 'GUEST' && status!==undefined){
            orders = await orderService.getByStatus(status)
        }else{
            orders = await orderService.getAllOrders()
        }

        utils.setSuccess(200,'Fetch Success',orders)
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
        const { items } = req.body;
        const { origin_id,origin_type } = req.userData;
        let total_cost = 0,activeOrders = 0;

        const orders = await orderService.findByOrigin({origin_id,origin_type});

        for(const order of orders){
            if(order.dataValues.status === 'pending'){
                activeOrders++;
            }
        }

        if(activeOrders === 3){
            const Error = {
                message:'Exided the number of orders',
                tip:'wait for previous orders to be delivered'
            }
            utils.setError(409,Error)
            return utils.send(res)
        }

        for(const item of items){
            item = parseInt(item);

            if(isNaN(item))continue;

            const exist = await itemServices.findById(item);

            if(!exist){
                utils.setError(404,`Item_id ${item} was not Found`)
                return utils.send(res)
            }
            
            total_cost += parseInt(exist.dataValues.price);
        }

        const neworder = await orderService.createOrder({
            origin_id,
            origin_type,
            items,
            total_cost,
            timestamp: Date.now(),
        })

        req.io.emit('new_order',neworder.dataValues);

        utils.setSuccess(201,'order Created',neworder.dataValues);
        return utils.send(res)
    }

    static async updateAnOrder(req,res){
        const { order_id } = req.params;
        const { origin_id,origin_type,role } = req.userData;
        const exist = await orderService.findById(order_id)

        if(!exist){
            utils.setError(404,'order not Found')
            return utils.send(res)
        }

        if(exist.dataValues.status !== 'pending'){
            utils.setError(409,'Order has Been Delivered')
            return utils.send(res)
        }

        if( role === 'GUEST' && origin_id !== exist.dataValues.origin_id ){
                const Error = {
                    message:'Ownership Restriction',
                    tip:`this order is from ${exist.dataValues.origin_type} ${exist.dataValues.origin_id} and you are ${origin_type} ${origin_id}`
                }
                utils.setError(403,Error)
                return utils.send(res)
            }

        const { items } = req.body;
        let total_cost = 0;

        for(const item of items){
            item = parseInt(item);

            if(isNaN(item))continue;

            const exist = await itemServices.findById(item);

            if(!exist){
                utils.setError(404,`Item_id ${item} was not Found`)
                return utils.send(res)
            }
            
            total_cost += parseInt(exist.dataValues.price);
        }


        const order = await orderService.updateAtt({
            ...req.body,
            origin_id,
            origin_type,
            items, 
            total_cost,
            timestamp: Date.now(),
        },{ id:order_id });
        
        req.io.emit('updated_order',order.dataValues)

        utils.setSuccess(200,'order Updated',order.dataValues)
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
