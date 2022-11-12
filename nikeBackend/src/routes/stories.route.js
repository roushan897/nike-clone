const storiesRouter = require('express').Router();

const { StoriesModel} = require('../models/product.model.js');

storiesRouter.get('/', async (req, res) => {
    try{
        let stories = await StoriesModel.find();
        res.send({msg: stories})
    }catch{
        res.send({msg: [], error: "something went wrong"})
    }
})

module.exports = storiesRouter;