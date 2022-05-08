import { Specifications } from '../interfaces'
import axiosClient from './axiosClient'

const specificationsApi = {
	addSpecifications(data: Specifications): Promise<Specifications> {
		const url = '/specifications'
		return axiosClient.post(url, data)
	},

	editSpecifications(data: Specifications): Promise<Specifications> {
		const url = `/specifications/${data.id}`
		return axiosClient.put(url, data)
	},
}

export default specificationsApi
