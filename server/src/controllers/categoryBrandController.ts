import { Request, Response } from 'express'
import { Brand } from '../entities/Brand'
import { CategoryBrand } from '../entities/CategoryBrand'

const categoryBrandController = {
	getBrandsByCategoryId: async (req: Request, res: Response) => {
		try {
			console.log(req.params.categoryId)

			const brandIds = await CategoryBrand.find({
				where: { categoryId: parseInt(req.params.categoryId) },
			})

			let brands: Brand[] = []
			for (let i = 0; i < brandIds.length; i++) {
				const brand = await Brand.findOne({
					where: { id: brandIds[i].brandId },
				})
				brands.push(brand as Brand)
			}

			return res.status(200).json(brands)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default categoryBrandController
