import { Request, Response } from 'express'
import { Category } from '../entities/Category'

const categoryController = {
	getAllCategory: async (_req: Request, res: Response) => {
		try {
			const allCategory = await Category.find()

			return res.status(200).json(allCategory)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default categoryController
