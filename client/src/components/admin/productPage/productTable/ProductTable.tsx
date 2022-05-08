import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../../app/hook'
import { Column, Row } from '../../../../interfaces'
import TableData from '../../tableData/TableData'
import AddOrEditProductModal from '../addOrEditProductModal/AddOrEditProductModal'
import { modalOpen } from '../../../../slices/modalSlice'
import './ProductTable.scss'
import ViewProductModal from '../viewProductModal/ViewProductModal'

const ProductTable = () => {
	const dispatch = useAppDispatch()
	const onOpen = useAppSelector((state) => state.modal.onOpen)
	const type = useAppSelector((state) => state.modal.type)

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
		{
			id: '6',
			fullname: 'Đậu Đức Toàn',
			totalOrders: 35,
			totalSpending: '$1,938',
		},
		{
			id: '7',
			fullname: 'Lannister',
			totalOrders: 42,
			totalSpending: '$1,838',
		},
		{
			id: '8',
			fullname: 'Lannister',
			totalOrders: 45,
			totalSpending: '$1,182',
		},
		{ id: '9', fullname: 'Stark', totalOrders: 16, totalSpending: '$836' },
		{
			id: '10',
			fullname: 'Melisandre',
			totalOrders: 150,
			totalSpending: '$2,384',
		},
	]

	return (
		<Box className='productTable'>
			<Box className='productTable__btn__wrapper'>
				<Button
					variant='outlined'
					className='productTable__btn'
					startIcon={<i className='bx bx-export'></i>}>
					Xuất
				</Button>

				<Box>
					<TextField
						id='search'
						placeholder='Tìm kiếm sản phẩm ...'
						variant='outlined'
						size='small'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<i className='bx bx-search-alt'></i>
								</InputAdornment>
							),
						}}
						className='productTable__btn__search'
					/>

					<Button
						variant='contained'
						className='productTable__btn'
						startIcon={<i className='bx bx-add-to-queue'></i>}
						onClick={() => dispatch(modalOpen('add'))}>
						Thêm mới
					</Button>
				</Box>
			</Box>
			<TableData
				size='small'
				rows={userRows}
				columns={userColumns}
				pagination
				onRowsPerPageChange
				actions
				viewComponent={<ViewProductModal />}
				editComponent={<AddOrEditProductModal />}
			/>
			{onOpen && type === 'add' && <AddOrEditProductModal />}
		</Box>
	)
}

export default ProductTable
