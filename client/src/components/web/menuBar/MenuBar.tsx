import { Box, Divider } from '@mui/material'
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

	const menus: IMenu[] = [
		{
			id: 1,
			name: 'Điện thoại',
			icon: 'bx bx-mobile-alt',
			slug: '/dien-thoai',
		},
		{
			id: 2,
			name: 'Macbook & Laptop',
			icon: 'bx bx-laptop',
			slug: '/macbook-laptop',
		},
		{
			id: 3,
			name: 'Loa',
			icon: 'bx bx-speaker',
			slug: '/loa',
		},
		{
			id: 4,
			name: 'Phụ kiện',
			icon: 'bx bx-headphone',
			slug: '/phu-kien',
		},
		{
			id: 5,
			name: 'Dịch vụ',
			icon: 'bx bx-wrench',
			slug: '/dich-vu',
		},
		{
			id: 6,
			name: 'Tin tức',
			icon: 'bx bxs-news',
			slug: '/tin-tuc',
		},
	]

	return (
		<Box className='menuBar'>
			<Box className='menuBar__menu__wrapper'>
				{menus.map((menu) => (
					<Link
						key={`menu-${menu.id}`}
						to={menu.slug}
						className={`menuBar__menu__item ${
							location.pathname === menu.slug
								? 'menuBar__menu__item__active'
								: ''
						}`}>
						<>
							<i className={`${menu.icon} menuBar__menu__item__icon`}></i>
							<span>{menu.name}</span>
						</>
					</Link>
				))}
			</Box>
			<Divider />
		</Box>
	)
}

export default MenuBar
