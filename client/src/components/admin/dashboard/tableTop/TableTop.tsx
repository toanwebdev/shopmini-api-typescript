import { Box } from '@mui/material'
import { Column, Row } from '../../../../interfaces'
import TableData from '../../tableData/TableData'
import './TableTop.scss'

const TableTop = () => {
	const userColumns: Column[] = [
		{ field: 'id', headerName: 'ID' },
		{ field: 'fullname', headerName: 'Khách hàng' },
		{
			field: 'totalOrders',
			headerName: 'Tổng số đơn hàng',
			number: true,
		},
		{
			field: 'totalSpending',
			headerName: 'Tổng chi tiêu',
		},
	]

	const userRows: Row[] = [
		{
			id: '1',
			fullname: 'Đậu Đức Toàn',
			totalOrders: 35,
			totalSpending: '$1,938',
		},
		{
			id: '2',
			fullname: 'Lannister',
			totalOrders: 42,
			totalSpending: '$1,838',
		},
		{
			id: '3',
			fullname: 'Lannister',
			totalOrders: 45,
			totalSpending: '$1,182',
		},
		{ id: '4', fullname: 'Stark', totalOrders: 16, totalSpending: '$836' },
		{
			id: '5',
			fullname: 'Melisandre',
			totalOrders: 150,
			totalSpending: '$2,384',
		},
		{ id: '6', fullname: 'Stark', totalOrders: 16, totalSpending: '$836' },
		{
			id: '7',
			fullname: 'Melisandre',
			totalOrders: 150,
			totalSpending: '$2,384',
		},
	]

	const orderColumns: Column[] = [
		{ field: 'id', headerName: 'Order ID' },
		{ field: 'fullname', headerName: 'Khách hàng' },
		{
			field: 'totalPrice',
			headerName: 'Tổng giá',
		},
		{
			field: 'date',
			headerName: 'Ngày đặt',
		},
		{
			field: 'status',
			headerName: 'Trạng thái',
		},
	]

	const orderRows: Row[] = [
		{
			id: '1',
			fullname: 'Đậu Đức Toàn',
			totalPrice: '$1,938',
			date: '20/11/2021',
			status: 'đã giao',
		},
		{
			id: '2',
			fullname: 'Lannister',
			totalPrice: '$938',
			date: '02/04/2021',
			status: 'đang chờ xử lý',
		},
		{
			id: '3',
			fullname: 'Lannister',
			totalPrice: '$1,153',
			date: '10/08/2021',
			status: 'đang giao',
		},
		{
			id: '4',
			fullname: 'Stark',
			totalPrice: '$435',
			date: '20/01/2022',
			status: 'đang chờ xử lý',
		},
		{
			id: '5',
			fullname: 'Melisandre',
			totalPrice: '$127',
			date: '22/10/2021',
			status: 'đã giao',
		},
		{
			id: '6',
			fullname: 'Stark',
			totalPrice: '$435',
			date: '20/01/2022',
			status: 'đang chờ xử lý',
		},
		{
			id: '7',
			fullname: 'Melisandre',
			totalPrice: '$127',
			date: '22/10/2021',
			status: 'đã giao',
		},
	]

	return (
		<Box className='tableTop__admin'>
			<Box className='tableTop__admin__table'>
				<Box className='tableTop__admin__table__title'>Khách hàng nổi bật</Box>
				<TableData size='small' rows={userRows} columns={userColumns} />
			</Box>

			<Box className='tableTop__admin__table'>
				<Box className='tableTop__admin__table__title'>
					Đơn đặt hàng cuối cùng
				</Box>
				<TableData size='small' rows={orderRows} columns={orderColumns} />
			</Box>
		</Box>
	)
}

export default TableTop
