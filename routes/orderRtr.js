const express = require('express')
const orderController = require('../controllers/orderCtrl')

const router = express.Router()

router.route('/').get(orderController.getOrders).post(orderController.createOrders)

router.route('/:id')
    .get(orderController.getbyID)
    .patch(orderController.updatebyID)
    .delete(orderController.deletebyID)

router.get('/', (req, res, next)=>{

})

module.exports = router