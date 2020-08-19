import Util from '../helpers/util';
import itemServices from '../services/itemservice';
import commentService from '../services/commentService';

const utils = new Util()

export default class reviews{
    static async getAllComments(req,res){
        const { item_id } = req.params;
        const item = await itemServices.findById(item_id)

        if(!item){
            utils.setError(404,'Item not Found')
            return utils.send(res)
        }

        const Comments = await commentService.getAllComments(item_id)

        utils.setSuccess(200,'Fetch Success',Comments)
        return utils.send(res)
    }

    static async createComment(req,res){
        const { item_id } = req.params;
        const item = await itemServices.findById(item_id)

        if(!item){
            utils.setError(404,'Item not Found')
            return utils.send(res)
        }
            
        const comment = await commentService.createComment({...req.body,item_id});

        utils.setSuccess(201,'Comment Created',comment.dataValues);
        return utils.send(res)
    }

    static async deleteComment(req,res){
        const { comment_id } = req.params;
        const comment = await commentService.findById(comment_id)

        if(!comment){
            utils.setError(404,'comment not Found')
            return utils.send(res)
        }

        await commentService.deleteAtt({ id:comment_id })

        utils.setSuccess(200,'Comment Deleted')
        return utils.send(res)
    }
}
