const express = require('express')
const app = express()
const productRoutes = require('./routes/productRtr')
const orderRoutes = require('./routes/orderRtr')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use('/products',productRoutes )
app.use('/orders', orderRoutes)
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.all('*', (req, res, next)=>{
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    console.log(err);
    res.json({
        error:{
            message:err.message
        }
    })
})

module.exports = app