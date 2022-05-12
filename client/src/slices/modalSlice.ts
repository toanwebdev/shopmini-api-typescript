import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state

interface ModalState {
	isLoading: boolean
	onOpen: boolean
	type: 'view' | 'add' | 'edit' | 'delete'
	data: any
}

// Define the initial state using that type
const initialState: ModalState = {
	isLoading: false,
	onOpen: false,
	type: 'view',
	data: '',
}

export const modalSlice = createSlice({
	name: 'modal',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		modalOpen: (
			state,
			action: PayloadAction<{
				type: 'view' | 'add' | 'edit' | 'delete'
				data: any
			}>,
		): void => {
			state.isLoading = true
			state.onOpen = true
			state.type = action.payload.type
			state.data = action.payload.data
		},
		modalClose: (state) => {
			state.isLoading = false
			state.onOpen = false
		},
	},
})

export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer
