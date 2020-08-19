import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Util from '../helpers/util';

dotenv.config();

const util = new Util();

export const authorizationCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.userData = decoded;
    next();
  } catch (error) {
    const Error = 'No token provided or Token expired';
    util.setError(401, Error);
    return util.send(res);
  }
};

export const tokenCheck = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    util.setSuccess(200,'Login Success',{decoded});
    return util.send(res);
  } catch (error) {
    const Error = 'No token provided or Token expired';
    util.setError(401, Error);
    return util.send(res);
  }
};
