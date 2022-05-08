import { Request, Response } from 'express'
import { Product } from '../entities/Product'

const productController = {
	updateProduct: async (req: Request, res: Response) => {
		try {
			const { id } = req.params
			let newProduct

			if (id) {
				const existingProduct = await Product.findOne({
					where: { id: parseInt(id) },
				})

				if (!existingProduct) {
					return res.status(404).json('Sản phẩm không tồn tại')
				}

				newProduct = { ...existingProduct, ...req.body }
			} else {
				newProduct = Product.create({
					...req.body,
				})
			}

			const updatedProduct = await newProduct.save()

			return res.status(200).json(updatedProduct)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default productController
