import express from 'express'
import categoryBrandController from '../controllers/categoryBrandController'

const router = express.Router()

router.get('/:categoryId/brands', categoryBrandController.getBrandsByCategoryId)

export default router
