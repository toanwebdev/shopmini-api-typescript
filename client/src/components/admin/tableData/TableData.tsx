import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
	Tooltip,
} from '@mui/material'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hook'
import { Column, Row } from '../../../interfaces'
import { modalOpen } from '../../../slices/modalSlice'
import { limitChange, pageChange } from '../../../slices/paginatioSlice'

interface ITableDataProps {
	size?: 'small' | 'medium'
	rows: Row[]
	columns: Column[]
	count: number
	pagination?: boolean
	onRowsPerPageChange?: boolean
	actions?: boolean
	viewComponent?: JSX.Element
	editComponent?: JSX.Element
}

const TableData = ({
	size,
	rows,
	columns,
	count,
	pagination,
	onRowsPerPageChange,
	actions,
	viewComponent,
	editComponent,
}: ITableDataProps) => {
	const limit = useAppSelector((state) => state.pagination.limit)

	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(limit)

	const dispatch = useAppDispatch()
	const onOpen = useAppSelector((state) => state.modal.onOpen)
	const type = useAppSelector((state) => state.modal.type)

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

	const handleChangePage = (
		_event: MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		setPage(newPage)
		dispatch(pageChange(newPage))
	}

	const handleChangeRowsPerPage = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, limit))
		dispatch(limitChange(parseInt(event.target.value)))
		setPage(0)
		dispatch(pageChange(0))
	}

	return (
		<TableContainer component={Paper}>
			<Table size={size} aria-label='a dense table'>
				<TableHead>
					<TableRow>
						{columns.map((column) => (
							<TableCell
								key={column.field}
								align={column.number ? 'right' : 'left'}>
								{column.headerName}
							</TableCell>
						))}

						{actions && <TableCell>Hành động</TableCell>}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name + row.id}
							hover
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							{Object.values(row).map((columnItem, index) => (
								<TableCell
									key={`row-${index}`}
									align={typeof columnItem === 'number' ? 'right' : 'left'}>
									{columnItem}
								</TableCell>
							))}
							{actions && (
								<TableCell>
									<Tooltip title='Xem chi tiết'>
										<IconButton
											color='info'
											onClick={() =>
												dispatch(modalOpen({ type: 'view', data: row }))
											}>
											<i className='bx bx-message-square-detail'></i>
										</IconButton>
									</Tooltip>

									<Tooltip title='Chỉnh sửa'>
										<IconButton
											color='warning'
											onClick={() =>
												dispatch(modalOpen({ type: 'edit', data: row }))
											}>
											<i className='bx bx-edit-alt'></i>
										</IconButton>
									</Tooltip>

									<Tooltip title='Xóa'>
										<IconButton color='error'>
											<i className='bx bx-trash-alt'></i>
										</IconButton>
									</Tooltip>
								</TableCell>
							)}
						</TableRow>
					))}

					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
				{pagination && (
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[
									2,
									4,
									6,
									8,
									10,
									{ label: 'All', value: -1 },
								]}
								labelRowsPerPage='Số hàng trên trang'
								colSpan={99}
								count={count}
								rowsPerPage={rowsPerPage}
								page={page}
								SelectProps={{
									inputProps: {
										'aria-label': 'Số hàng trên trang',
									},
									native: true,
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={
									onRowsPerPageChange ? handleChangeRowsPerPage : undefined
								}
							/>
						</TableRow>
					</TableFooter>
				)}
			</Table>

			{onOpen && type === 'view' && viewComponent}
			{onOpen && type === 'edit' && editComponent}
		</TableContainer>
	)
}

export default TableData
