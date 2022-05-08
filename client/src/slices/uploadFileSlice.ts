import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Image } from '../interfaces'

// Define a type for the slice state

interface UploadFileState {
	colorId: number
	files: any[]
	images: Image[]
}

// Define the initial state using that type
const initialState: UploadFileState[] = [
	{
		colorId: -1,
		files: [''],
		images: [{ id: '-1', name: '', link: '' }],
	},
]

export const uploadFileSlice = createSlice({
	name: 'uploadFile',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		uploadFileAdd: (state, action: PayloadAction<number>) => {
			const index = state.findIndex(
				(uploadFileItem) => uploadFileItem.colorId === action.payload,
			)

			if (index === -1) {
				state.push({
					colorId: action.payload,
					files: [''],
					images: [{ id: '-1', name: '', link: '' }],
				})
			} else {
				state.splice(index, 1, {
					colorId: action.payload,
					files: [''],
					images: [{ id: '-1', name: '', link: '' }],
				})
			}
		},

		uploadFileDel: (state, action: PayloadAction<number>) => {
			const index = state.findIndex(
				(uploadFileItem) => uploadFileItem.colorId === action.payload,
			)

			state.splice(index, 1, {
				colorId: state[index].colorId,
				files: ['del'],
				images: [{ id: '-1', name: 'del', link: 'del' }],
			})
		},

		uploadFileAddItem: (
			state,
			action: PayloadAction<{ file: any; image: Image }>,
		) => {
			const { file, image } = action.payload
			const { colorId, ...otherImages } = image

			if (colorId !== -1) {
				const index = state.findIndex(
					(uploadFileItem) => uploadFileItem.colorId === colorId,
				)

				state[index].files[state[index].files.length - 1] = file
				state[index].images[state[index].images.length - 1] = otherImages
				state[index].files.push('')
				state[index].images.push({ id: '-1', name: '', link: '' })
			} else {
				state[0].files[0] = file
				state[0].images[0] = otherImages
			}
		},

		uploadFileDelItem: (
			state,
			action: PayloadAction<{ colorId: number; indexImage: number }>,
		) => {
			const { colorId, indexImage } = action.payload

			if (colorId !== -1) {
				const index = state.findIndex(
					(uploadFileItem) => uploadFileItem.colorId === colorId,
				)

				state[index].files.splice(indexImage, 1, 'del')
				state[index].images.splice(indexImage, 1, {
					id: state[index].images[indexImage].id,
					name: 'del',
					link: 'del',
				})
			} else {
				state[0].files[0] = 'del'

				state[0].images[0] = {
					id: '-1',
					name: '',
					link: '',
				}
			}
		},

		uploadFileReset: (state) => {
			state.splice(0, state.length)
			state.push({
				colorId: -1,
				files: [''],
				images: [{ id: '-1', name: '', link: '' }],
			})
		},
	},
})

export const {
	uploadFileAdd,
	uploadFileDel,
	uploadFileAddItem,
	uploadFileDelItem,
	uploadFileReset,
} = uploadFileSlice.actions

export default uploadFileSlice.reducer
