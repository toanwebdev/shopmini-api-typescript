import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
	isLoading: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
	isLoading: false,
}

export const callApiSlice = createSlice({
	name: 'callApi',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		callApiStart: (state) => {
			state.isLoading = true
		},
		callApiEnd: (state) => {
			state.isLoading = false
		},
	},
})

export const { callApiStart, callApiEnd } = callApiSlice.actions

export default callApiSlice.reducer
