import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import callApiReducer from '../slices/callApiSlice'
// ...

export const store = configureStore({
	reducer: {
		auth: authReducer,
		callApi: callApiReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
