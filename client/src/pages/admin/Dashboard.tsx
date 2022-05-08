import { Box } from '@mui/material'
import CardChart from '../../components/admin/dashboard/cardChart/CardChart'
import TableTop from '../../components/admin/dashboard/tableTop/TableTop'

const Dashboard = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#f4f5fa',
				minHeight: '89vh',
				padding: '10px 20px',
			}}>
			<CardChart />
			<TableTop />
		</Box>
	)
}

export default Dashboard
