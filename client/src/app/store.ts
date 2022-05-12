import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import callApiReducer from '../slices/callApiSlice'
import modalReducer from '../slices/modalSlice'
import uploadFileReducer from '../slices/uploadFileSlice'
import paginationReducer from '../slices/paginatioSlice'
// ...

export const store = configureStore({
	reducer: {
		auth: authReducer,
		callApi: callApiReducer,
		modal: modalReducer,
		uploadFile: uploadFileReducer,
		pagination: paginationReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
