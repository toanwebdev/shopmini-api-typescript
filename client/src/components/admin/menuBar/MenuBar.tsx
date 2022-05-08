import {
	Box,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MenuBar.scss'

interface IMenu {
	id: number
	name: string
	icon: string
	slug: string
}

const MenuBar = () => {
	const location = useLocation()
	const [activeMenu, setActiveMenu] = useState(true)

	const menus: IMenu[] = [
		{
			id: 1,
			name: 'Bảng điều khiển',
			icon: 'bx bx-scatter-chart',
			slug: '',
		},
		{
			id: 2,
			name: 'Đơn hàng',
			icon: 'bx bx-cart',
			slug: '/don-hang',
		},
		{
			id: 3,
			name: 'Sản phẩm',
			icon: 'bx bx-package',
			slug: '/san-pham',
		},
		{
			id: 4,
			name: 'Tài khoản',
			icon: 'bx bx-user',
			slug: '/tai-khoan',
		},
	]

	return (
		<Box className='menuBar__admin'>
			<Box className='menuBar__admin__logo__wrapper'>
				<Link to='/quan-tri' className='menuBar__admin__logo'>
					Shopmini
				</Link>

				<IconButton onClick={() => setActiveMenu(!activeMenu)}>
					{activeMenu ? (
						<i className='bx bx-radio-circle-marked menuBar__admin__logo__activeMenu'></i>
					) : (
						<i className='bx bx-radio-circle menuBar__admin__logo__activeMenu'></i>
					)}
				</IconButton>
			</Box>

			<List
				sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				component='nav'
				aria-labelledby='nested-list-subheader'>
				{menus.map((menu) => (
					<Link
						key={`menuBar-admin-menu-${menu.id}`}
						to={`/quan-tri${menu.slug}`}
						className={`menuBar__admin__menu__item ${
							menu.slug === location.pathname.split('/quan-tri')[1]
								? 'menuBar__admin__menu__item__active'
								: ''
						}`}>
						<ListItemButton sx={{ margin: '10px 0px' }}>
							<ListItemIcon>
								<i
									className={`${menu.icon} menuBar__admin__menu__item__icon`}></i>
							</ListItemIcon>
							<ListItemText primary={menu.name} />
						</ListItemButton>
					</Link>
				))}
			</List>
		</Box>
	)
}

export default MenuBar
