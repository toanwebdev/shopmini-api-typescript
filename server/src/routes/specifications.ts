import express from 'express'
import specificationsController from '../controllers/specificationsController'

const router = express.Router()

router.post('/', specificationsController.updateSpecifications)
router.put('/:id', specificationsController.updateSpecifications)

export default router
