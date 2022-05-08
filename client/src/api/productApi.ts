import { Product } from '../interfaces'
import axiosClient from './axiosClient'

const productApi = {
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
