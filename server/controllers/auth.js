import userService from '../services/userServicee';
import jwt from 'jsonwebtoken';
import Utils from '../helpers/util';
import { util } from 'chai';

const utils = new Utils();

export default class Auth{

    static async Login (req,res) {
        const { username,password,origin_id,origin_type } = req.body;

        const exist = await userService.getUser(username);
        
        if(!exist){
            utils.setError(400,'Invalid User')
            return utils.send(res)
        }

        if(exist.dataValues.password !== password){
            utils.setError(409,'Invalid Password')
            return utils.send(res)
        }

        const { role } = exist.dataValues;

        const tokenData = { role, origin_id: origin_id||username, origin_type:origin_type||role};
        const token = jwt.sign(tokenData,process.env.JWT_KEY);

        utils.setSuccess(200,'LogIn SuccEss',{...tokenData,token});
        utils.send(res)
    }
    
    static async CreateUser(req,res){
        const newUser = userService.createNewUser(req.body)
        utils.setSuccess(201,'User Created',newUser)
        utils.send(res)
    }

}
