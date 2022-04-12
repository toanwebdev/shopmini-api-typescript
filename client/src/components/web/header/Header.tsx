import {
	Avatar,
	Box,
	Button,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	TextField,
	Tooltip,
} from '@mui/material'
import { MouseEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authApi from '../../../api/authApi'
import userApi from '../../../api/userApi'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { User } from '../../../interfaces'
import {
	logoutFailed,
	logoutStart,
	logoutSuccess,
} from '../../../slices/authSlice'
import { callApiEnd, callApiStart } from '../../../slices/callApiSlice'
import JWTManager from '../../../utils/jwt'
import './Header.scss'

const Header = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [user, setUser] = useState<User | null>(null)
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	const handleLogout = async () => {
		dispatch(logoutStart())
		try {
			await authApi.logoutUser(JWTManager.getUserId() as number)
			dispatch(logoutSuccess())
			JWTManager.deleteToken()
			navigate('/')
		} catch (error) {
			dispatch(logoutFailed())
		}
	}

	useEffect(() => {
		dispatch(callApiStart())
		const getUserById = async () => {
			const data = await userApi.getUserById(JWTManager.getUserId() as number)
			dispatch(callApiEnd())
			setUser(data)
		}
		getUserById()
		dispatch(callApiEnd())
	}, [dispatch, isAuthenticated])

	return (
		<Box className='header'>
			<Box className='header__left'>
				<span className='header__left__logo'>Shopmini</span>

				{/* tìm kiếm */}
				<Box className='header__left__search'>
					<TextField
						id='search'
						placeholder='Tìm kiếm sản phẩm ...'
						variant='outlined'
						size='small'
						className='header__left__search__input'
					/>

					<i className='bx bx-search-alt header__left__search__icon'></i>
				</Box>
				{/* tìm kiếm */}
			</Box>

			<Box className='header__right'>
				{/* giỏ hàng */}
				<Link to='/cart'>
					<Button
						variant='outlined'
						startIcon={<i className='bx bx-cart'></i>}
						className='header__right__btn'>
						Giỏ hàng
					</Button>
				</Link>
				{/* giỏ hàng */}

				{isAuthenticated ? (
					<Box className='header__right__user'>
						<span className='header__right__user__name'>
							Xin chào, {user?.lastName}
						</span>
						<Tooltip title='Cài đặt tài khoản'>
							<IconButton
								onClick={handleMenuClick}
								size='small'
								sx={{ ml: 2 }}
								aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}>
								<Avatar>{user?.lastName?.slice(0, 1)}</Avatar>
							</IconButton>
						</Tooltip>

						<Menu
							anchorEl={anchorEl}
							id='account-menu'
							open={open}
							onClose={handleMenuClose}
							onClick={handleMenuClose}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: 'visible',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
							<MenuItem>
								<ListItemIcon>
									<i className='bx bx-user-pin header__right__user__menu__icon'></i>
								</ListItemIcon>
								Thông tin cá nhân
							</MenuItem>
							<MenuItem onClick={handleLogout}>
								<ListItemIcon>
									<i className='bx bx-log-out header__right__user__menu__icon'></i>
								</ListItemIcon>
								Đăng xuất
							</MenuItem>
						</Menu>
					</Box>
				) : (
					<Box>
						{/* Đăng nhập */}
						<Link to='/dang-nhap'>
							<Button variant='outlined' className='header__right__btn'>
								Đăng nhập
							</Button>
						</Link>
						{/* Đăng nhập */}

						{/* Đăng ký */}
						<Link to='/dang-ky'>
							<Button variant='outlined' className='header__right__btn'>
								Đăng ký
							</Button>
						</Link>
						{/* Đăng ký */}
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default Header
