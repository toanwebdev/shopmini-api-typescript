import { Color } from '../interfaces/color'
import axiosClient from './axiosClient'

const colorApi = {
	getAllColor(): Promise<Color[]> {
		const url = '/color'
		return axiosClient.get(url)
	},
}

export default colorApi
