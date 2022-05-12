import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface PaginationState {
	page: number
	limit: number
}

// Define the initial state using that type
const initialState: PaginationState = {
	page: 0,
	limit: 2,
}

export const paginationSlice = createSlice({
	name: 'pagination',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		pageChange: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},

		limitChange: (state, action: PayloadAction<number>) => {
			state.limit = action.payload
		},
	},
})

export const { pageChange, limitChange } = paginationSlice.actions

export default paginationSlice.reducer
