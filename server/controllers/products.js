import Util from '../helpers/util';
import mailer from '../helpers/mailer';
import productServices from '../services/productService';
import transactionServices from '../services/transactionService';

const utils = new Util()

export default class products{

    static async getAllProducts(req,res){
        const { type } = req.query;
        let products;
        
        products = type !== undefined ?
        await productServices.fingByType(type):
        await productServices.AllProducts()   ;

        utils.setSuccess(200,'Fetch Success',products.reverse())
        return utils.send(res)
    }

    static async getOneProduct(req,res){
        const { id } = req.params;
        const product = await productServices.fingById(id);

        if(!product){
            utils.setError(404,'Product NotFound')
            return utils.send(res)
        }

        utils.setSuccess(200,'Fetch Success',product)
        return utils.send(res)
    }

    static async createProduct(req,res){
        const { id,username } = req.userData;

        const exist = await productServices.fingByName(req.body.name);

        if(exist){
            utils.setError(409,`Product ${req.body.name} Already exist`)
            return utils.send(res)
        }

        const newProduct = await productServices.createProduct(req.body);

        await transactionServices.createTrans({
            author_id: id,
            author_name: username,
            product_id: newProduct.dataValues.id,
            product_name: newProduct.dataValues.name,
            quantity:newProduct.dataValues.quantity,
            details:"Created Product",
        })
        
        utils.setSuccess(201,'Product Created Success',newProduct)
        return utils.send(res)
    }

    static async updateProduct(req,res){
        const { username } = req.userData;
        const { id } = req.params;
        const { name,quantity,avatar,price } = req.body;
        let transaction_type,difference;

        const product = await productServices.fingById(id);

        if(!product){
            utils.setError(404,'Product NotFound')
            return utils.send(res)
        }

        await productServices.updateAtt( req.body,{ id })

        if(quantity !== product.dataValues.quantity){
            if(quantity > product.dataValues.quantity){
                difference = quantity - product.dataValues.quantity
                transaction_type = `Added ${difference} ${name}, new Net Worth is ${price} rwf`;
            }else{
                difference = product.dataValues.quantity - quantity;
               transaction_type =  `Reduced ${difference} ${name}, new Net Worth is ${price} Rwf`;
            }
            
        }

        if(avatar !== product.dataValues.avatar){
            transaction_type += `Changes delivery from ${avatar} to ${product.dataValues.avatar}`;
        }

        if(parseInt(quantity) === 0){
            transaction_type += `, Shop Alert: Product ${name} is finished`
        }

        const trans = await transactionServices.createTrans({
            author_id: req.userData.id,
            author_name: username,
            product_id: product.dataValues.id,
            product_name: name,
            quantity: difference ,
            details:transaction_type||'Updated some credential',
        })

        mailer( trans.dataValues )
        
        utils.setSuccess(200, transaction_type||'Updated some credential' +' Success')
        return utils.send(res)
    }

    static async deleteProduct(req,res){
        const { id } = req.params;
        const { username } = req.userData;
        const product = await productServices.fingById(id)

        if(!product){
            utils.setError(404, `Product id ${id} Not Found`)
            return utils.send(res)
        }

        await transactionServices.createProduct({
            author_id: req.userData.id,
            author_name: username,
            product_id: product.dataValues.id,
            product_name: product.dataValues.name,
            quantity:product.dataValues.quantity,
            details:`Product ${product.dataValues.name} was Deleted`,
        })

        await productServices.deleteAtt(id)

        utils.setSuccess(200,'Product Deleted',id)
        return utils.send(res)
    }

}
