import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';
import { io } from './helpers/socketConnection';

const app = express();

app.use(express.static(path.join(__dirname,'./templates')))

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req,res,next)=>{
    req.io = io;
    next();
  });

  
app.use('/', router);

export default app;
