import { Box } from '@mui/material'
import ProductSearchFilter from '../../components/admin/productPage/productSearchFilter/ProductSearchFilter'
import ProductTable from '../../components/admin/productPage/productTable/ProductTable'

const ProductPage = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#f4f5fa',
				minHeight: '89vh',
				padding: '10px 20px',
			}}>
			<ProductSearchFilter />
			<ProductTable />
		</Box>
	)
}

export default ProductPage
