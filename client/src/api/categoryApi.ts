import { Category } from '../interfaces'
import axiosClient from './axiosClient'

const categoryApi = {
	getAllCategory(): Promise<Category[]> {
		const url = '/category'
		return axiosClient.get(url)
	},
}

export default categoryApi
