import express from 'express'
import productController from '../controllers/productController'

const router = express.Router()

router.get('/count', productController.getCount)
router.get('/:page/:limit', productController.getProductByPagination)
router.post('/', productController.updateProduct)
router.put('/:id', productController.updateProduct)

export default router
