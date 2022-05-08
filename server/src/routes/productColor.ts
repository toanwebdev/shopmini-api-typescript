import express from 'express'
import productColorController from '../controllers/productColorController'

const router = express.Router()

router.post('/', productColorController.addProductColor)

export default router
