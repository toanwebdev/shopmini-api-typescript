import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppDispatch } from './app/hook'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/web/Home'
import Layout from './pages/web/Layout'
import { loginStart, loginSuccess, loginFailed } from './slices/authSlice'
import JWTManager from './utils/jwt'

function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		const authenticate = async () => {
			dispatch(loginStart())

			const token = JWTManager.getToken()
			if (token) {
				dispatch(loginSuccess())
			} else {
				const success = await JWTManager.getRefreshToken()
				if (success) {
					dispatch(loginSuccess())
				} else {
					dispatch(loginFailed())
				}
			}
		}
		authenticate()
	}, [dispatch])

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/dang-nhap' element={<Login />}></Route>
					<Route path='/dang-ky' element={<Register />}></Route>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
