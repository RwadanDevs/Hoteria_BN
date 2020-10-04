import { Router } from 'express';
import controller from '../../controllers/transaction';
import role from "../../middlewares/roleAuthorisation";
import { authorizationCheck } from "../../middlewares/authorization";

const route = Router();

route.get('/transactions', authorizationCheck, controller.getAlltransactions)

// route.get('/transactions/:id',authorizationCheck,role('ADMIN','COOK','BAR'),controller)

// route.post('/transactions',authorizationCheck,role('ADMIN','COOK','BAR'),validator.TransactionValidator,controller)

// route.patch('/transaction/:id',authorizationCheck,role('ADMIN','COOK','BAR'),validator.TransactionValidator,controller)

route.delete('/transactions/:id', authorizationCheck,role('ADMIN'), controller.deletetransaction)

export default route;
