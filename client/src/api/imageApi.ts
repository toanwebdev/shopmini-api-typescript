import { Image } from '../interfaces'
import axiosClient from './axiosClient'

const imageApi = {
	addImage(data: Image): Promise<Image> {
		const url = '/image'
		return axiosClient.post(url, data)
	},

	editImage(data: Image): Promise<Image> {
		const url = `/image/${data.id}`
		return axiosClient.put(url, data)
	},
}

export default imageApi
