import { Brand } from '../interfaces'
import axiosClient from './axiosClient'

const categoryBrandApi = {
	getBrandsByCategoryId(categoryId: string): Promise<Brand[]> {
		const url = `/categoryBrand/${categoryId}/brands`
		return axiosClient.get(url)
	},
}

export default categoryBrandApi
