import { ProductColor } from './../entities/ProductColor'
import { Request, Response } from 'express'

const productColorController = {
	addProductColor: async (req: Request, res: Response) => {
		try {
			const newProductColor = ProductColor.create({
				...req.body,
			})

			const addProduct = await newProductColor.save()
			return res.status(200).json(addProduct)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default productColorController
