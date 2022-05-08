import { Request, Response } from 'express'
import { Image } from '../entities/Image'

const imageController = {
	updateImage: async (req: Request, res: Response) => {
		try {
			const { id } = req.params
			let newImage

			if (id) {
				const existingImage = await Image.findOne({
					where: { id: parseInt(id) },
				})

				if (!existingImage) {
					return res.status(404).json('Hình ảnh không tồn tại')
				}

				newImage = { ...existingImage, ...req.body }
			} else {
				newImage = Image.create({
					...req.body,
				})
			}

			const updatedImage = await newImage.save()

			return res.status(200).json(updatedImage)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default imageController
