
import jwt from 'jsonwebtoken';
import Utils from '../helpers/util';

const utils = new Utils();

export default (req,res)=>{
    const { username,password,origin_id,origin_type } = req.body;

    let role = username.toUpperCase()

    if(role!=='GUEST'&&role!=='MANAGER'&&role!=='COOK'){
        utils.setError(400,'USERNAME NOTFOUND')
        return utils.send(res)
    }

    const user = role + '_PASSWORD';

    if(eval(`process.env.${user}`) !== password){
        utils.setError(400,'iNCORRECT PaSSWORD')
        return utils.send(res)
    }

    let origin = `${Math.floor(Math.random(1)*10)}`;
    const tokenData = { role, origin_id: origin_id||origin, origin_type:origin_type||role }

    const token = jwt.sign(tokenData,process.env.JWT_KEY)
    utils.setSuccess(200,'LogIn SuccEss',{...tokenData,token});
    utils.send(res)
}
