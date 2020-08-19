import { Router } from 'express';
import controller from '../../controllers/orders';
import validator from '../../middlewares/validators';
import role from "../../middlewares/roleAuthorisation";
import { authorizationCheck } from "../../middlewares/authorization";

const route = Router();

route.get('/orders',authorizationCheck,controller.getAllOrders)

route.get('/orders/:order_id',authorizationCheck,controller.getSpecificOrder)

route.post('/orders',authorizationCheck,role('GUEST'),validator.orderValidator,controller.createAnOrder)

route.patch('/orders/:order_id',authorizationCheck,role('GUEST','COOK'),validator.orderValidator,controller.updateAnOrder)

route.delete('/orders/:order_id',authorizationCheck,role('GUEST','COOK'),controller.deleteAnOrder)

export default route;
