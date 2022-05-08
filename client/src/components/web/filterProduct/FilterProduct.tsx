import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Menu,
	MenuItem,
} from '@mui/material'
import { useState } from 'react'
import { Brand, Filter, Price, Product } from '../../../interfaces'
import numberWithCommas from '../../../utils/numberWithCommas'
import ProductGroup from '../productGroup/ProductGroup'
import './FilterProduct.scss'

interface IFilterProductProps {
	brands: Brand[]
	total: number
	prices: Price[]
	filters: Filter[]
	products: Product[]
}

const FilterProduct = ({
	brands,
	total,
	prices,
	filters,
	products,
}: IFilterProductProps) => {
	const [brandActive, setBrandActive] = useState('-1')
	const [showFilter, setShowFilter] = useState(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const [filterLabel, setFilterLabel] = useState('Sắp xếp theo')

	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = (e: any) => {
		setAnchorEl(null)
		if (e.target.id) {
			setFilterLabel(e.target.id)
		}
	}

	return (
		<Box className='filterProduct'>
			{/* thương hiệu */}
			<Box className='filterProduct__brand'>
				{brands.map((item) => (
					<Box
						key={`filterProduct-img-${item.id}`}
						className={`filterProduct__brand__item ${
							item.id === brandActive
								? 'filterProduct__brand__item__active'
								: ''
						}`}
						onClick={() => setBrandActive(item.id)}>
						<img src={item.avatar} alt={item.name} />
					</Box>
				))}
			</Box>
			{/* thương hiệu */}

			<Box className='filterProduct__item__wrapper'>
				<Box>
					<span className='filterProduct__item__total__wrapper'>
						Có{' '}
						<span className='filterProduct__item__total'>
							{numberWithCommas(total)}
						</span>{' '}
						sản phẩm
					</span>
				</Box>

				<Box>
					{prices.map((item, index) => (
						<FormControlLabel
							key={`filterProduct-item-${item.id}`}
							control={
								<Checkbox
									size='small'
									sx={{
										color: '#f15a25',
										'&.Mui-checked': {
											color: '#f15a25',
										},
									}}
								/>
							}
							label={
								index === 0
									? `Dưới ${item.price[0]} triệu`
									: index === prices.length - 1
									? `Trên ${item.price[0]} triệu`
									: `Từ ${item.price[0]} triệu đến ${item.price[1]} triệu`
							}
							sx={{
								'& .MuiFormControlLabel-label': {
									fontSize: '14px',
								},
								margin: '0px 10px',
							}}
						/>
					))}
				</Box>

				<Button
					className={`filterProduct__btn ${
						showFilter ? 'filterProduct__btn__active' : ''
					}`}
					onClick={() => setShowFilter(!showFilter)}
					startIcon={<i className='bx bx-filter-alt'></i>}>
					Bộ lọc
				</Button>

				<Button
					id='sort-button'
					aria-controls={open ? 'sort-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
					endIcon={<i className='bx bx-chevron-down'></i>}
					className='filterProduct__menu'>
					{filterLabel}
				</Button>

				<Menu
					id='sort-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'sort-button',
					}}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
					<MenuItem id='Mới nhất' onClick={(e: any) => handleClose(e)}>
						Mới nhất
					</MenuItem>
					<MenuItem id='A => Z' onClick={(e: any) => handleClose(e)}>
						A {'=>'} Z
					</MenuItem>
					<MenuItem id='Z => A' onClick={(e: any) => handleClose(e)}>
						Z {'=>'} A
					</MenuItem>
					<MenuItem id='Giá tăng dần' onClick={(e: any) => handleClose(e)}>
						Giá tăng dần
					</MenuItem>
					<MenuItem id='Giá giảm dần' onClick={(e: any) => handleClose(e)}>
						Giá giảm dần
					</MenuItem>
				</Menu>
			</Box>
			{/* bộ lọc */}
			<Box
				className={`filterProduct__filter ${
					showFilter ? 'filterProduct__filter__active' : ''
				}`}>
				{filters.map((filter) => (
					<Box key={`filterProduct-filter-${filter.id}`}>
						<span className='filterProduct__filter__title'>{filter.title}</span>
						<Box>
							{filter.contents.map((content) => (
								<FormControlLabel
									key={`filterProduct-filter-content-${content.id}`}
									control={
										<Checkbox
											size='small'
											sx={{
												color: '#f15a25',
												'&.Mui-checked': {
													color: '#f15a25',
												},
											}}
										/>
									}
									label={content.name}
									sx={{
										'& .MuiFormControlLabel-label': {
											fontSize: '14px',
										},
										margin: '0px 10px',
									}}
								/>
							))}
						</Box>
					</Box>
				))}
			</Box>
			{/* bộ lọc */}

			{/* sản phẩm */}
			<ProductGroup
				products={products}
				moreTotal={total - products.length}
				button
			/>
			{/* sản phẩm */}
		</Box>
	)
}

export default FilterProduct
