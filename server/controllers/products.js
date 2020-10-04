import Util from '../helpers/util';
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

        utils.setSuccess(200,'Fetch Success',products)
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

        await transactionServices.createProduct({
            author_id: id,
            author_name: username,
            product_id: newProduct.dataValues.id,
            product_name: newProduct.dataValues.name,
            quantity:newProduct.dataValues.quantity,
            details:"Create Product",
        })
        
        utils.setSuccess(201,'Product Created Success',newProduct)
        return utils.send(res)
    }

    static async updateProduct(req,res){
        const { username } = req.userData;
        const { id } = req.params;
        const { name,quantity } = req.body;
        let transaction_type;

        const product = await productServices.fingById(id);

        if(!product){
            utils.setError(404,'Product NotFound')
            return utils.send(res)
        }

        await productServices.updateAtt( req.body,{ id })

        if(req.body.quantity !== product.dataValues.quantity){
            
            transaction_type = quantity > product.dataValues.quantity ? 
            `Added ${quantity - product.dataValues.quantity} ${name}(s) `: 
            `Reduced ${product.dataValues.quantity - quantity} ${name}(s) `;
        }

        await transactionServices.createProduct({
            author_id: req.userData.id,
            author_name: username,
            product_id: product.dataValues.id,
            product_name: name,
            quantity,
            detailts:transaction_type||'Updated some credential',
        })

        
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
            details:'Deleted Product',
        })

        await productServices.deleteAtt(id)

        utils.setSuccess(200,'Product Deleted',id)
        return utils.send(res)
    }

}
