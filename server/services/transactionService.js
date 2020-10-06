import models from '../models';

const { transactions } = models;

export default class transactionServices {
    static createTrans(newTrans){
        return transactions.create(newTrans);
    }

    static deleteAtt(id) {
        return transactions.destroy({
          where: { id },
        });
      }

    static fingById(id){
        return transactions.findOne({
            where: { id }
        })
      }
      
    static fingByAuthor(id){
        return transactions.findAll({
            where: { author_id:id }
        })
      }
    
    static allTransactions(){
        return transactions.findAll()
      }
}
