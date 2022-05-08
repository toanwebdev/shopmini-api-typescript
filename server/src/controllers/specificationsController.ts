import { Request, Response } from 'express'
import { Specifications } from '../entities/Specifications'

const specificationsController = {
	updateSpecifications: async (req: Request, res: Response) => {
		try {
			const { id } = req.params
			let newSpecifications

			if (id) {
				const existingSpecifications = await Specifications.findOne({
					where: { id: parseInt(id) },
				})

				if (!existingSpecifications) {
					return res.status(404).json('Thông số kỹ thuật không tồn tại')
				}

				newSpecifications = { ...existingSpecifications, ...req.body }
			} else {
				newSpecifications = Specifications.create({
					...req.body,
				})
			}

			const updatedSpecifications = await newSpecifications.save()

			return res.status(200).json(updatedSpecifications)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default specificationsController
