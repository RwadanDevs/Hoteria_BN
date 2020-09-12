import dotenv from 'dotenv';
import { dataUri } from './mutler';
import cloudinary,{ uploader } from 'cloudinary';

dotenv.config();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async (req) => {
  const file = dataUri(req).content;
  const result = await uploader.upload(file);
  console.log("got here====",result);
  return result.url;
};


