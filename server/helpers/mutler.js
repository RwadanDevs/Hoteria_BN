import multer from 'multer';
import Datauri from 'datauri/parser';
import path from 'path';
import { date } from '@hapi/joi';

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'server/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now().toString() + file.originalname)
    }
})

const limits = { fileSize: 1024 * 1024 * 5 } // 5 mbs  limit per image

export const multerUploads = multer({ storage , limits }).single('avatar'); 

