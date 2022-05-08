import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
import './ProductSearchFilter.scss'

const ProductSearchFilter = () => {
	const [selectBrand, setSelectBrand] = useState('')
	const [selectCategory, setSelectCategory] = useState('')
	const [selectStatus, setSelectStatus] = useState('')

	const handleChangeBrand = (event: SelectChangeEvent) => {
		setSelectBrand(event.target.value as string)
	}

	const handleChangeCategory = (event: SelectChangeEvent) => {
		setSelectCategory(event.target.value as string)
	}

	const handleChangeStatus = (event: SelectChangeEvent) => {
		setSelectStatus(event.target.value as string)
	}

	return (
		<Box className='productSearchFilter'>
			<Box className='productSearchFilter__title'>Bộ lọc tìm kiếm</Box>
			<Box className='productSearchFilter__select'>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>
						Chọn thương hiệu
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={selectBrand}
						label='Chọn thương hiệu'
						onChange={handleChangeBrand}>
						<MenuItem value={''}>Chọn thương hiệu</MenuItem>
						<MenuItem value={'10'}>Ten</MenuItem>
						<MenuItem value={'20'}>Twenty</MenuItem>
						<MenuItem value={'30'}>Thirty</MenuItem>
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>
						Chọn loại sản phẩm
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={selectCategory}
						label='Chọn loại sản phẩm'
						onChange={handleChangeCategory}>
						<MenuItem value={''}>Chọn loại sản phẩm</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>

				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Chọn trạng thái</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={selectStatus}
						label='Chọn trạng thái'
						onChange={handleChangeStatus}>
						<MenuItem value={''}>Chọn trạng thái</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
	)
}

export default ProductSearchFilter
