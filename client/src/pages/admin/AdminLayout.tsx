import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../../components/admin/header/Header'
import MenuBar from '../../components/admin/menuBar/MenuBar'

const AdminLayout = () => {
	return (
		<>
			<MenuBar />
			<Box sx={{ width: 'calc(100% / 6 * 5)', marginLeft: 'calc(100% / 6)' }}>
				<Header />
				<Outlet />
			</Box>
		</>
	)
}

export default AdminLayout
