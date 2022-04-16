import { Box, Button } from '@mui/material'
import { Product } from '../../../interfaces'
import ProductItem from '../productItem/ProductItem'
import './ProductGroup.scss'

interface IProductGroupProps {
	products: Product[]
	moreTotal?: number
	button?: boolean
}

const ProductGroup = ({ products, moreTotal, button }: IProductGroupProps) => {
	return (
		<Box className='productGroup'>
			<Box
				className='productGroup__item__wrapper'
				sx={{ gridTemplateRows: `repeat(${products.length / 5}, 1fr)` }}>
				{products.map((item) => (
					<Box key={item.id} className='productGroup__item'>
						<ProductItem product={item} />
					</Box>
				))}
			</Box>

			{button ? (
				<Box className='productGroup__btn__wrapper'>
					<Button variant='outlined' className='productGroup__btn'>
						Xem thêm {moreTotal} sản phẩm
					</Button>
				</Box>
			) : (
				''
			)}
		</Box>
	)
}

export default ProductGroup
