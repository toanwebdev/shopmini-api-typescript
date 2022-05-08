import { Box, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import { Product } from '../../../interfaces'
import numberWithCommas from '../../../utils/numberWithCommas'
import './ProductItem.scss'

interface IProductProps {
	product: Product
	borderRadius?: string
	rate?: number
	rateTotal?: number
}

const ProductItem = ({
	product,
	borderRadius,
	rate,
	rateTotal,
}: IProductProps) => {
	return (
		<Box className='productItem' sx={{ borderRadius: `${borderRadius}` }}>
			<Link to={product.slug} className='productItem__link'>
				{!product.installment && !product.discount && !product.new && (
					<Box className='productItem__box' sx={{ marginTop: '15px' }} />
				)}

				{product.installment && (
					<Box className='productItem__box productItem__box__installment'>
						Trả góp 0%
					</Box>
				)}

				{product.discount && (
					<Box className='productItem__box productItem__box__discount'>
						Giảm giá
					</Box>
				)}

				{product.new && (
					<Box className='productItem__box productItem__box__new'>Mới nhất</Box>
				)}

				<Box className='productItem__img__wrapper'>
					<img
						src={product.avatar}
						alt={product.name}
						className='productItem__img'
					/>
				</Box>

				<Box className='productItem__name'>{product.name}</Box>

				{product.priceDiscount !== 0 && (
					<Box className='productItem__priceDiscount'>
						{numberWithCommas(product.priceDiscount as number)}₫
					</Box>
				)}

				<Box>
					<span className='productItem__price'>
						{numberWithCommas(product.price as number)}
					</span>
					₫
				</Box>

				{product.gift !== 0 && (
					<Box className='productItem__gift'>
						Quà {numberWithCommas(product.gift as number)}₫
					</Box>
				)}

				{rate && rate !== 0 && (
					<Box className='productItem__rate'>
						<Rating
							name='read-only'
							value={rate}
							readOnly
							precision={0.5}
							size='small'
						/>
						<Box>
							<span className='productItem__rate__total'>
								{numberWithCommas(rateTotal as number)}
							</span>{' '}
							đánh giá
						</Box>
					</Box>
				)}
			</Link>
		</Box>
	)
}

export default ProductItem
