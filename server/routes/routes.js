import dotenv from 'dotenv';
import express from 'express';
import auth from './apis/auth';
import items from './apis/items';
import orders from './apis/orders';
import reviews from './apis/reviews';
import Util from '../helpers/util';
import notFound from '../middlewares/notFound';

dotenv.config();

const util = new Util();
const router = express.Router();
const version = process.env.API_VERSION;
const url = `/api/${version}`;

router.get('/', (req, res) => {
  const message = 'Gloria Welcomes You';
  util.setSuccess(200, message);
  return util.send(res);
});

router.use(`${url}`, auth);
router.use(`${url}`, items);
router.use(`${url}`, orders);
router.use(`${url}`, reviews);
router.use(notFound);

export default router;
