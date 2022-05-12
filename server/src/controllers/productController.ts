import { Request, Response } from 'express'
import { Product } from '../entities/Product'

const productController = {
	getCount: async (_req: Request, res: Response) => {
		return res.status(200).json(await Product.count())
	},
	getProductByPagination: async (req: Request, res: Response) => {
		try {
			const { page, limit } = req.params
			console.log({ page, limit })

			const products: Product[] = await Product.find({
				order: {
					createdAt: 'ASC',
				},
				skip: parseInt(page as string) * parseInt(limit as string),
				take: parseInt(limit as string),
			})

			return res.status(200).json(products)
		} catch (error) {
			return res.status(500).json(error)
		}
	},

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
