import { Router } from 'express';
import controller from '../../controllers/products';
import validator from '../../middlewares/validators';
import role from "../../middlewares/roleAuthorisation";
import { authorizationCheck } from "../../middlewares/authorization";

const route = Router();

route.get('/products', authorizationCheck, controller.getAllProducts)

route.post('/products', authorizationCheck,role('ADMIN'), validator.ProductValidation, controller.createProduct) 

route.patch('/products/:id',authorizationCheck,role('ADMIN','COOK','BAR'), validator.ProductValidation, controller.updateProduct) 

route.delete('/products/:id',authorizationCheck,role('ADMIN'), controller.deleteProduct)

export default route;
