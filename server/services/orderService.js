import models from '../models';

const { orders } = models;

export default class orderServices {
    static createOrder(newOrder){
        return orders.create(newOrder);
    }

    static updateAtt(set, prop) {
      return orders.update(set, {
        where: prop,
      });
    }

    static deleteAtt(id) {
        return orders.destroy({
          where: { id },
        });
      }

    static findById(id) {
        return orders.findOne({
          where: { id },
        });
    }

    static findByOrigin({origin_id,origin_type}) {
      return orders.findAll({
        where: { origin_id,origin_type },
      });
    }

    static getAllOrders() {
      return orders.findAll();
    }

    static getByStatus(prop){
        return orders.findAll({
            where:{status: prop},
        })
    }
}
