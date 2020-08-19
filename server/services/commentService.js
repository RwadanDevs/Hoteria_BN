import models from '../models';

const { comments } = models;

export default class CommentServices {
    static createComment(newComment){
        return comments.create(newComment);
    }

    static deleteAtt(prop) {
        return comments.destroy({
          where: prop,
        });
      }

    static findById(id){
      return comments.findOne({
        where: { id }
      })
    }


    static getAllComments(id) {
      return comments.findAll({
        where: { item_id : id }
      });
    }

}
