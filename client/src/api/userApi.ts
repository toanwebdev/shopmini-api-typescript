import { User } from '../interfaces'
import axiosClient from './axiosClient'

const userApi = {
	getUserById(id: number): Promise<User> {
		const url = `/user/${id}`
		return axiosClient.get(url)
	},
}

export default userApi
