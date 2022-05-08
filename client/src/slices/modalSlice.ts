import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state

interface ModalState {
	isLoading: boolean
	onOpen: boolean
	type: 'view' | 'add' | 'edit' | 'delete'
}

// Define the initial state using that type
const initialState: ModalState = {
	isLoading: false,
	onOpen: false,
	type: 'view',
}

export const modalSlice = createSlice({
	name: 'modal',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		modalOpen: (
			state,
			action: PayloadAction<'view' | 'add' | 'edit' | 'delete'>,
		): void => {
			state.isLoading = true
			state.onOpen = true
			state.type = action.payload
		},
		modalClose: (state) => {
			state.isLoading = false
			state.onOpen = false
		},
	},
})

export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer
