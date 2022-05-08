import { ProductColor } from '../interfaces'
import axiosClient from './axiosClient'

const productColorApi = {
	addProductColor(data: ProductColor): Promise<ProductColor> {
		const url = '/product-color'
		return axiosClient.post(url, data)
	},
}

export default productColorApi
