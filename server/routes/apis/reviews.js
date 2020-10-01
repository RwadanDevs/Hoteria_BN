import { Router } from 'express';
import controller from '../../controllers/review';
import validator from '../../middlewares/validators';
import role from "../../middlewares/roleAuthorisation";
import { authorizationCheck } from "../../middlewares/authorization";

const route = Router();
 
route.get('/review/:item_id',authorizationCheck,controller.getAllComments)

route.post('/review/:item_id',authorizationCheck,validator.reviewValidator,controller.createComment)

route.delete('/review/:comment_id',authorizationCheck,role('ADMIN'),controller.deleteComment)

export default route;