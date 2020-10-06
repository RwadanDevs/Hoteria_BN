import Util from '../helpers/util';
import transactionServices from '../services/transactionService';

const utils = new Util()

export default class transactions{

    static async getAlltransactions(req,res){
        const { id,role } = req.userData;
        let transactions;

        transactions = role !== "ADMIN" ?
        await transactionServices.fingByAuthor(id):
        await transactionServices.allTransactions()
        
        utils.setSuccess(200,'Fetch Success',transactions.reverse())
        return utils.send(res)
    }

    static async deletetransaction(req,res){
        const { id } = req.params;
        const transaction = await transactionServices.fingById(id)

        if(!transaction){
            utils.setError(404, `transaction id ${id} Not Found`)
            return utils.send(res)
        } 

        await transactionServices.deleteAtt(id)

        utils.setSuccess(200,'transaction Deleted',id)
        return utils.send(res)
    }

}
