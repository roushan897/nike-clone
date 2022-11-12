const productRouter = require('express').Router();
const { ProductModel } = require('../models/product.model.js');

productRouter.get('/', async (req, res) => { 
    try{
        if(req.query.id){
            let product = await ProductModel.findById(req.query.id).limit(req.query._limit);
            res.send({msg: product})
        }else{
            let product = await ProductModel.find().limit(req.query._limit);
            res.send({msg: product}) 
        }
    }catch(err){
        res.send({msg: [], error: 'something went wrong'})
    }       
});

module.exports = productRouter;