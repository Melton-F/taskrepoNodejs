const Product = require('../models/productMdl')
const mongoose = require('mongoose')


const getPrdcts = (req, res, next)=>{
    res.status(200).json({
        message:"get prdcts router"
    })
}

const createPrdcts = async (req, res, next)=>{
    // const product = await Product.create(req.body)
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price
    })
    product.save().then(resolve => console.log(resolve)).catch(error => console.log(error))
    res.status(201).json({
        message:"product created",
        createdProduct:product
    })
}

const getbyID = (req, res, next)=>{
    if(req.params.id === 'special'){
        res.status(200).json({
            message:'its special',
            id:req.params.id
        })
    }else{
        res.status(200).json({
            message:'its not special'
        })
    }
}

const updatebyID = (req, res, next)=>{
    res.status(200).json({
        message:"product updated"
    })
}

const delegtebyID = (req, res, next)=>{
    res.status(200).json({
        message:"product deleted"
    })
}

module.exports ={
    getPrdcts, createPrdcts, getbyID, updatebyID, delegtebyID
}