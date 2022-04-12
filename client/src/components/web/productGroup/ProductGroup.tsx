import { Box, Button } from '@mui/material'
import { Product } from '../../../interfaces'
import ProductItem from '../productItem/ProductItem'
import './ProductGroup.scss'

interface IProductGroupProps {
	products: Product[]
	productTotal?: number
	button?: boolean
}

const ProductGroup = ({ products, productTotal, button }: IProductGroupProps) => {
	return (
		<Box className='productGroup'>
			<Box className='productGroup__item__wrapper'>
				{products.map((item) => (
					<Box key={item.id} className='productGroup__item'>
						<ProductItem product={item} />
					</Box>
				))}
			</Box>

			{button ? (
				<Box className='productGroup__btn'>
					<Button variant='contained' className='productGroup__btn__more'>
						<span>Xem thêm {productTotal} sản phẩm</span>
						<i className='bx bxs-down-arrow productGroup__btn__more__icon'></i>
					</Button>
				</Box>
			) : (
				''
			)}
		</Box>
	)
}

export default ProductGroup
