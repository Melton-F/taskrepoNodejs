const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{
        type:String
    },
    price:Number
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product