import express from 'express';
import controller from '../../controllers/auth';
import Auth from '../../middlewares/validators';
import { authorizationCheck } from "../../middlewares/authorization";
import role from "../../middlewares/roleAuthorisation";
import { tokenCheck } from "../../middlewares/authorization";

const route = express.Router();

route.post('/login', Auth.authValidator, controller.Login);

route.get('/login/:token', tokenCheck);

route.post('/createUser', authorizationCheck, role("Admin"), controller.CreateUser)

export default route;
