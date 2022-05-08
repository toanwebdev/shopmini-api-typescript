import { Color } from './../entities/Color'
import { Request, Response } from 'express'

const colorController = {
	getAllColor: async (_req: Request, res: Response) => {
		try {
			const allColor = await Color.find()

			return res.status(200).json(allColor)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default colorController
