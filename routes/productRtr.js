const express = require('express')
const productController = require('../controllers/prdctCtrl')

const router = express.Router()

router.route('/').get(productController.getPrdcts).post(productController.createPrdcts)

router.route('/:id')
    .get(productController.getbyID)
    .patch(productController.updatebyID)
    .delete(productController.delegtebyID)

module.exports = router