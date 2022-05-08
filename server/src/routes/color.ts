import express from 'express'
import colorController from '../controllers/colorController'

const router = express.Router()

router.get('/', colorController.getAllColor)

export default router
