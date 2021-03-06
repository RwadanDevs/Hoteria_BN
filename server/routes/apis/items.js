import { Router } from 'express';
import controller from '../../controllers/items';
import validator from '../../middlewares/validators';
import role from "../../middlewares/roleAuthorisation";
import { multerUploads } from '../../helpers/mutler';
import { authorizationCheck } from "../../middlewares/authorization";

const route = Router();

route.post('/imageUpload',
            authorizationCheck,
            role('COOK'),
            multerUploads,
            controller.AvatarUpload
        )

route.get('/items',
            authorizationCheck,
            controller.getAllItems 
        )

route.get('/items/:item_id',
            authorizationCheck,
            controller.getSpecificItem
        )

route.post('/items',
            authorizationCheck,
            role('ADMIN'),
            validator.itemValidator,
            controller.createAnItem
        )

route.patch('/items/:item_id',
            authorizationCheck,
            role('COOK','ADMIN','BAR'),
            multerUploads,
            validator.itemValidator,
            controller.updateAnItem
        )

route.delete('/items/:item_id',
            authorizationCheck,
            role('COOK','ADMIN','BAR'),
            controller.deleteAnItem 
        )

export default route;