import { Box, Button, InputAdornment, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import productApi from '../../../../api/productApi'
import { useAppDispatch, useAppSelector } from '../../../../app/hook'
import { Column, Product, Row } from '../../../../interfaces'
import { modalOpen } from '../../../../slices/modalSlice'
import TableData from '../../tableData/TableData'
import AddOrEditProductModal from '../addOrEditProductModal/AddOrEditProductModal'
import ViewProductModal from '../viewProductModal/ViewProductModal'
import './ProductTable.scss'

const ProductTable = () => {
	const dispatch = useAppDispatch()
	const onOpen = useAppSelector((state) => state.modal.onOpen)
	const type = useAppSelector((state) => state.modal.type)
	const page = useAppSelector((state) => state.pagination.page)
	const limit = useAppSelector((state) => state.pagination.limit)

	const [totalProduct, setTotalProduct] = useState<number>(0)
	const [productPaginations, setProductPaginations] = useState<Product[]>([])
	const [productRows, setProductRows] = useState<Row[]>([])

	const productColumns: Column[] = [
		{ field: 'id', headerName: 'ID' },
		{ field: 'name', headerName: 'Tên sản phẩm' },
		{
			field: 'avatar',
			headerName: 'Ảnh đại diện',
		},
		{
			field: 'price',
			headerName: 'Giá',
		},
		{
			field: 'status',
			headerName: 'Trạng thái',
		},
	]

	useEffect(() => {
		const getCount = async () => {
			const total = await productApi.getCount()
			setTotalProduct(total)
		}
		getCount()
	}, [])

	useEffect(() => {
		const getProductByPagination = async () => {
			const products = await productApi.getProductByPagination({ page, limit })
			setProductPaginations(products)
		}

		getProductByPagination()
	}, [page, limit])

	useEffect(() => {
		let rows: Row[] = []
		for (let i = 0; i < productPaginations.length; i++) {
			rows.push({
				id: productPaginations[i].id as string,
				name: productPaginations[i].name,
				avatar: productPaginations[i].avatar,
				price: productPaginations[i].price,
				status: productPaginations[i].quantity > 0 ? 'còn hàng' : 'hết hàng',
			})
		}
		setProductRows(rows)
	}, [productPaginations, limit])

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
						onClick={() => dispatch(modalOpen({ type: 'add', data: '' }))}>
						Thêm mới
					</Button>
				</Box>
			</Box>
			<TableData
				size='small'
				rows={productRows}
				columns={productColumns}
				pagination
				count={totalProduct}
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
