import models from '../models';

const { products } = models;

export default class productServices {
    static createProduct(newProduct){
        return products.create(newProduct);
    }

    static AllProducts(){
      return products.findAll();
    }

    static fingByType(type){
      return products.findAll({
          where: { type }
      })
    }

    static fingById(id){
        return products.findOne({
            where: { id }
        })
    }

    static fingByName(name){
      return products.findOne({
          where: { name }
      })
  }

    static updateAtt(set, prop) {
      return products.update(set, {
        where: prop,
      });
    }

    static deleteAtt(id) {
        return products.destroy({
          where: { id },
        });
      }
}
