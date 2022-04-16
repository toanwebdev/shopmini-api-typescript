import { Box, CircularProgress, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../../app/hook'
import Footer from '../../components/web/footer/Footer'
import Header from '../../components/web/header/Header'
import MenuBar from '../../components/web/menuBar/MenuBar'

const Layout = () => {
	const isLoading = useAppSelector((state) => state.callApi.isLoading)

	if (isLoading) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
				}}>
				<CircularProgress />
			</Box>
		)
	}

	return (
		<Box>
			<Header />
			<MenuBar />
			<Container style={{ maxWidth: '1200px !important' }}>
				<Outlet />
			</Container>
			<Footer />
		</Box>
	)
}

export default Layout
