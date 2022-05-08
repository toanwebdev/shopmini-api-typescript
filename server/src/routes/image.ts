import express from 'express'
import imageController from '../controllers/imageController'

const router = express.Router()

router.post('/', imageController.updateImage)
router.put('/:id', imageController.updateImage)

export default router
