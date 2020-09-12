import Util from '../helpers/util';
import uploadImage from '../helpers/imageUploader';
import itemServices from '../services/itemservice';
import reviewServices from '../services/commentService';

const utils = new Util()

const { WEB_URL }  = process.env;

export default class items{
    static async getAllItems(req,res){
        const { foodType } = req.query;
        let items;
        
        if(foodType || foodType!==undefined){
            items = await itemServices.getByFoodType(foodType);
        }else{
            items = await itemServices.getAllItems()
        }

        utils.setSuccess(200,'Fetch Success',items)
        return utils.send(res)
    }

    static async getSpecificItem(req,res){
        const { item_id } = req.params;

        const item = await itemServices.findById(item_id)

        if(!item){
            utils.setError(404,'Item not Found')
            return utils.send(res)
        }

        const reviews = await reviewServices.getAllComments(item_id)

        utils.setSuccess(200,'Fetch Successful',{item: item.dataValues,reviews})
        return utils.send(res)
    }

    static async AvatarUpload(req,res){
        if(!req.file){
            utils.setError(404,'Should Upload Food Avatar')
            return utils.send(res);
           }

        const photoUrl = `${WEB_URL}${req.file.filename}`;

        utils.setSuccess(201,'Item Uploaded',photoUrl);
        return utils.send(res)
    }

    static async createAnItem(req,res){
        const newItem = await itemServices.createItem(req.body);

        utils.setSuccess(201,'Item Created',newItem);
        return utils.send(res)
    }

    static async updateAnItem(req,res){
        const { item_id } = req.params;
        const exist = await itemServices.findById(item_id)

        if(!exist){
            utils.setError(404,'Item not Found')
            return utils.send(res)
        }
        
        if(!req.file){
            utils.setError(404,'Should Upload Food Avatar')
            return utils.send(res);
        }
            
        const photoUrl = await uploadImage(req)

        const item = await itemServices.updateAtt({...req.body,photoUrl},{ id:item_id })

        utils.setSuccess(200,'Item Updated',item.dataValues)
        return utils.send(res)
    }

    static async deleteAnItem(req,res){
        const { item_id } = req.params;
        const item = await itemServices.findById(item_id)

        if(!item){
            utils.setError(404,'Item not Found')
            return utils.send(res)
        }

        await itemServices.deleteAtt({ id:item_id })

        utils.setSuccess(200,'Item Deleted')
        return utils.send(res)
    }
}
