import { Box } from '@mui/material'
import Featured from '../../components/web/home/featured/Featured'
import SliderProduct from '../../components/web/home/sliderProduct/SliderProduct'
import { ProductName } from '../../interfaces'

const Home = () => {
	const phoneFeaturedNames: ProductName[] = [
		{
			id: 1,
			name: 'iPhone 13 Series',
			slug: '',
		},
		{
			id: 2,
			name: 'Samsung Galaxy A52s',
			slug: '',
		},
		{
			id: 3,
			name: 'Oppo Reni6 Z',
			slug: '',
		},
	]

	const phoneFeaturedTotal = 174

	const phoneFeaturedProducts: any[] = [
		{
			id: 1,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 2,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 3,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 4,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 5,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 6,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 7,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 8,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 9,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 10,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
			name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
	]

	const macLapFeaturedNames: ProductName[] = [
		{
			id: 1,
			name: 'Laptop Asus',
			slug: '',
		},
		{
			id: 2,
			name: 'Laptop HP',
			slug: '',
		},
	]

	const macLapFeaturedTotal = 199

	const macLapFeaturedProducts: any[] = [
		{
			id: 1,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 2,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 3,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 4,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 5,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 6,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 7,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 8,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg',
			name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H (NH.QD9SV.005.',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
	]

	const accessoryFeaturedNames: ProductName[] = [
		{
			id: 1,
			name: 'S???c D??? Ph??ng',
			slug: '',
		},
		{
			id: 2,
			name: 'C??p S???c',
			slug: '',
		},
		{
			id: 3,
			name: 'Tai Nghe',
			slug: '',
		},
		{
			id: 4,
			name: 'Loa',
			slug: '',
		},
		{
			id: 5,
			name: '???p L??ng',
			slug: '',
		},
	]

	const accessoryFeaturedTotal = 555

	const accessoryFeaturedProducts: any[] = [
		{
			id: 1,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 2,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 3,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 4,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 5,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 6,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: true,
			discount: false,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 7,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 26000000,
			price: 28190000,
			priceDiscount: 27000000,
			installment: false,
			discount: true,
			new: true,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
		{
			id: 8,
			avatar:
				'https://cdn.tgdd.vn/Products/Images/54/250701/tai-nghe-bluetooth-airpods-3-191021-085229-600x600.jpg',
			name: 'Tai nghe Bluetooth AirPods 3 Apple MME73',
			priceImport: 27000000,
			price: 28190000,
			priceDiscount: 29990000,
			installment: false,
			discount: false,
			new: false,
			gift: 1880000,
			slug: '',
			quantity: 2,
			description: '',
		},
	]

	return (
		<Box>
			<SliderProduct />
			<Featured
				title='??i???n tho???i'
				productNames={phoneFeaturedNames}
				productTotal={phoneFeaturedTotal}
				products={phoneFeaturedProducts}
				slider
			/>
			<Featured
				title='Macbook & Laptop'
				productNames={macLapFeaturedNames}
				productTotal={macLapFeaturedTotal}
				products={macLapFeaturedProducts}
			/>
			<Featured
				title='Ph??? ki???n'
				productNames={accessoryFeaturedNames}
				productTotal={accessoryFeaturedTotal}
				products={accessoryFeaturedProducts}
			/>
		</Box>
	)
}

export default Home
