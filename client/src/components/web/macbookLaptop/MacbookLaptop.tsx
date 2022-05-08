import { Box } from '@mui/material'
import {
	Brand,
	Breadcrumb,
	Filter,
	Image,
	Price
} from '../../../interfaces'
import BreadcrumbsPath from '../breadcrumbsPath/BreadcrumbsPath'
import FilterProduct from '../filterProduct/FilterProduct'
import SliderMini from '../sliderMini/SliderMini'
import './MacbookLaptop.scss'

const MacbookLaptop = () => {
	const macLapSliders: Image[] = [
		{
			id: '1',
			link: 'https://stcv4.hnammobile.com/uploads/optimized/banner/reno7-sieu-hot-chi-voi-10-490-000d-1003849.png?v=1649732402',
			name: 'Reno7 Siêu Hot Chỉ Với 10.490.000đ',
		},
		{
			id: '2',
			link: 'https://stcv4.hnammobile.com/uploads/optimized/banner/dot-pha-bat-ngo-mi-11-gia-chi-3-999-000d-1003753.png?v=1648873442',
			name: 'Đột Phá Bất Ngờ - Mi 11 Giá Chỉ 3.999.000đ',
		},
		{
			id: '3',
			link: 'https://stcv4.hnammobile.com/uploads/optimized/banner/sale-tung-bung-mung-dai-le-1003880.png?v=1649414343?v=1648873442',
			name: 'Sale Tưng Bừng - Mừng Đại Lễ',
		},
		{
			id: '4',
			link: 'https://stcv4.hnammobile.com/uploads/optimized/banner/samsung-galaxy-a73-ruc-net-nguyen-ban-1003881.png?v=1649736543',
			name: 'Samsung Galaxy A73 - Rực Nét Nguyên Bản',
		},
		{
			id: '5',
			link: 'https://stcv4.hnammobile.com/uploads/optimized/banner/dot-pha-bat-ngo-mi-11-gia-chi-3-999-000d-1003753.png?v=1648873442',
			name: 'Đột Phá Bất Ngờ - Mi 11 Giá Chỉ 3.999.000đ',
		},
	]

	const breadcrumbsMacLapPhone: Breadcrumb[] = [
		{
			id: 1,
			name: 'Trang chủ',
			slug: '/',
		},
		{
			id: 2,
			name: 'Macbook & Laptop',
			slug: '/macbook-laptop',
		},
	]

	const macLapBrands: Brand[] = [
		{
			id: '1',
			name: 'iPhone',
			avatar:
				'https://stcv4.hnammobile.com/uploads/data/apple-iphone-1600080003.png?v=1631585173',
		},
		{
			id: '2',
			name: 'samsung',
			avatar:
				'https://stcv4.hnammobile.com/uploads/data/samsung1600079942.png?v=1600079942',
		},
		{
			id: '3',
			name: 'oppo',
			avatar: 'https://stcv4.hnammobile.com/uploads/data/oppo.png?v=1600078879',
		},
		{
			id: '4',
			name: 'xiaomi',
			avatar:
				'https://stcv4.hnammobile.com/uploads/data/xiaomi.png?v=1600078869',
		},
	]

	const macLapPrices: Price[] = [
		{
			id: 1,
			price: [20],
		},
		{
			id: 2,
			price: [20, 25],
		},
		{
			id: 3,
			price: [25, 30],
		},
		{
			id: 4,
			price: [30],
		},
	]

	const macLapFilters: Filter[] = [
		{
			id: 1,
			title: 'Màn hình',
			contents: [
				{
					id: 1,
					name: '13 inch',
				},
				{
					id: 2,
					name: '16 inch',
				},
				{
					id: 3,
					name: '17 inch',
				},
				{
					id: 4,
					name: '18 inch',
				},
			],
		},
		{
			id: 2,
			title: 'Ram',
			contents: [
				{
					id: 1,
					name: '4 GB',
				},
				{
					id: 2,
					name: '8 GB',
				},
				{
					id: 3,
					name: '16 GB',
				},
				{
					id: 4,
					name: '32 GB',
				},
			],
		},
		{
			id: 3,
			title: 'HDD',
			contents: [
				{
					id: 1,
					name: '128 GB',
				},
				{
					id: 2,
					name: '256 GB',
				},
				{
					id: 3,
					name: '512 GB',
				},
				{
					id: 4,
					name: '1 TB',
				},
			],
		},
		{
			id: 4,
			title: 'SSD',
			contents: [
				{
					id: 1,
					name: '128 GB',
				},
				{
					id: 2,
					name: '256 GB',
				},
				{
					id: 3,
					name: '512 GB',
				},
				{
					id: 4,
					name: '1 TB',
				},
			],
		},
	]

	const macLapProducts: any[] = [
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
		{
			id: 9,
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
			id: 10,
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

	return (
		<Box>
			<SliderMini sliders={macLapSliders} />
			<BreadcrumbsPath breadcrumbs={breadcrumbsMacLapPhone} />
			<FilterProduct
				brands={macLapBrands}
				total={150}
				prices={macLapPrices}
				filters={macLapFilters}
				products={macLapProducts}
			/>
		</Box>
	)
}

export default MacbookLaptop
