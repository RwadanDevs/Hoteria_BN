import express from 'express';
import controller from '../../controllers/auth';
import Auth from '../../middlewares/validators';
import { tokenCheck } from "../../middlewares/authorization";

const route = express.Router();

route.post('/login', Auth.authValidator, controller);

route.get('/login/:token', tokenCheck);

export default route;
