const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    type: String,
    title: String,
    text: String,   
    description: String,
    rating: Number,
    images: String,
    price: Number,
    color: String,
    shadow: String,
    details: [String]
});

const storiesSchema = new mongoose.Schema({
    title: String,
    text: String,
    img: String,
    url: String,
    like: String,
    time: String,
    by: String,
    btn: String,
});

const ProductModel = mongoose.model('shoe', productSchema);
const StoriesModel = mongoose.model('storie', storiesSchema);

module.exports = {ProductModel,StoriesModel};
