import models from '../models';

const { items } = models;

export default class itemServices {
    static createItem(newItem){
        return items.create(newItem);
    }

    static updateAtt(set, prop) {
      return items.update(set, {
        where: prop,
      });
    }

    static deleteAtt(prop) {
        return items.destroy({
          where: prop,
        });
      }

    static findById(id) {
        return items.findOne({
          where: { id },
        });
    }

    static getAllItems() {
      return items.findAll();
    }

    static getByFoodType(prop){
        return items.findAll({
            where:{food_type: prop},
        })
    }
    
}
