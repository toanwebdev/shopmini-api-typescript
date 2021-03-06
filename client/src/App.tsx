import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import userApi from './api/userApi'
import { useAppDispatch } from './app/hook'
import MacbookLaptop from './components/web/macbookLaptop/MacbookLaptop'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import OrderPage from './pages/admin/OrderPage'
import ProductPage from './pages/admin/ProductPage'
import UserPage from './pages/admin/UserPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import DetailMobiPhone from './pages/web/DetailMobiPhone'
import Home from './pages/web/Home'
import Layout from './pages/web/Layout'
import MobilePhone from './pages/web/MobilePhone'
import { loginFailed, loginStart, loginSuccess } from './slices/authSlice'
import JWTManager from './utils/jwt'

function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		const authenticate = async () => {
			dispatch(loginStart())

			const token = JWTManager.getToken()
			if (token) {
				const data = await userApi.getUserById(JWTManager.getUserId() as number)
				dispatch(loginSuccess(data))
			} else {
				const success = await JWTManager.getRefreshToken()
				if (success) {
					const data = await userApi.getUserById(
						JWTManager.getUserId() as number,
					)
					dispatch(loginSuccess(data))
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
					<Route path='dang-nhap' element={<Login />}></Route>
					<Route path='dang-ky' element={<Register />}></Route>
					<Route path='quan-tri' element={<AdminLayout />}>
						<Route path='don-hang' element={<OrderPage />} />
						<Route path='san-pham' element={<ProductPage />} />
						<Route path='tai-khoan' element={<UserPage />} />
						<Route index element={<Dashboard />} />
					</Route>
					<Route path='/' element={<Layout />}>
						<Route path='dien-thoai'>
							<Route path=':slug' element={<DetailMobiPhone />} />
							<Route index element={<MobilePhone />} />
						</Route>
						<Route path='macbook-laptop' element={<MacbookLaptop />} />
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
