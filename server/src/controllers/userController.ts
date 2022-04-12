import { Request, Response } from 'express'
import { User } from './../entities/User'
const userController = {
	getUserById: async (req: Request, res: Response) => {
		try {
			const existingUser = await User.findOne({
				where: { id: parseInt(req.params.id) },
			})

			if (!existingUser) {
				return res.status(404).json('Tài khoản không tồn tại')
			}

			const { password: _, ...others } = existingUser

			return res.status(200).json(others)
		} catch (error) {
			return res.status(500).json(error)
		}
	},
}

export default userController
