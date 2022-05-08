import express from 'express'
import productController from '../controllers/productController'

const router = express.Router()

router.post('/', productController.updateProduct)
router.put('/:id', productController.updateProduct)

export default router
