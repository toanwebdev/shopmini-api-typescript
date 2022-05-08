import {
	Avatar,
	Badge,
	Box, IconButton,
	InputAdornment,
	ListItemIcon,
	Menu,
	MenuItem,
	TextField,
	Tooltip
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import authApi from '../../../api/authApi'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import {
	logoutFailed,
	logoutStart,
	logoutSuccess
} from '../../../slices/authSlice'
import JWTManager from '../../../utils/jwt'
import './Header.scss'

const Header = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
	const user = useAppSelector((state) => state.auth.user)

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

	if (!isAuthenticated) {
		navigate('/dang-nhap')
	}

	return (
		<Box>
			<ToastContainer />

			<Box className='header__admin'>
				{/* tìm kiếm */}
				<TextField
					id='search'
					placeholder='Tìm kiếm ...'
					variant='outlined'
					size='small'
					InputProps={{
						startAdornment: (
							<InputAdornment position='start'>
								<i className='bx bx-search-alt'></i>
							</InputAdornment>
						),
					}}
					className='header__admin__left__search'
				/>
				{/* tìm kiếm */}

				<Box>
					<IconButton aria-label='Notification'>
						<Badge badgeContent={5} color='primary'>
							<i className='bx bx-bell'></i>
						</Badge>
					</IconButton>

					<Tooltip title='Cài đặt tài khoản'>
						<IconButton
							onClick={handleMenuClick}
							size='small'
							sx={{ ml: 2 }}
							aria-controls={open ? 'account-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}>
							<Avatar sx={{ width: 35, height: 35 }}>
								{user?.lastName?.slice(0, 1)}
							</Avatar>
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
							<Box className='header__admin__right__user__menu__info'>
								<Avatar sx={{ width: 35, height: 35 }}>
									{user?.lastName?.slice(0, 1)}
								</Avatar>
								<Box className='header__admin__right__user__menu__info__text'>
									<Box>
										{user?.firstName} {user?.lastName}
									</Box>
									<span>Admin</span>
								</Box>
							</Box>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<i className='bx bx-user-pin header__admin__right__user__menu__icon'></i>
							</ListItemIcon>
							Thông tin cá nhân
						</MenuItem>
						<MenuItem onClick={handleLogout}>
							<ListItemIcon>
								<i className='bx bx-log-out header__admin__right__user__menu__icon'></i>
							</ListItemIcon>
							Đăng xuất
						</MenuItem>
					</Menu>
				</Box>
			</Box>
		</Box>
	)
}

export default Header
