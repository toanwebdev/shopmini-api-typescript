import { Product } from '../interfaces'
import axiosClient from './axiosClient'

const productApi = {
	getCount(): Promise<number> {
		const url = '/product/count'
		return axiosClient.get(url)
	},

	getProductByPagination({
		page,
		limit,
	}: {
		page: number
		limit: number
	}): Promise<Product[]> {
		const url = `/product/${page}/${limit}`
		return axiosClient.get(url)
	},

	addProduct(data: Product): Promise<Product> {
		const url = '/product'
		return axiosClient.post(url, data)
	},

	editProduct(data: Product): Promise<Product> {
		const url = `/product/${data.id}`
		return axiosClient.put(url, data)
	},
}

export default productApi
