import { Box } from '@mui/material'
import BreadcrumbsPath from '../../components/web/breadcrumbsPath/BreadcrumbsPath'
import FilterProduct from '../../components/web/filterProduct/FilterProduct'
import SliderMini from '../../components/web/sliderMini/SliderMini'
import { Brand, Breadcrumb, Filter, Image, Price } from '../../interfaces'

const MobilePhone = () => {
	const mobiSliders: Image[] = [
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

	const breadcrumbsMobiPhone: Breadcrumb[] = [
		{
			id: 1,
			name: 'Trang chủ',
			slug: '/',
		},
		{
			id: 2,
			name: 'Điện thoại',
			slug: '/dien-thoai',
		},
	]

	const mobiBrands: Brand[] = [
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

	const mobiPrices: Price[] = [
		{
			id: 1,
			price: [5],
		},
		{
			id: 2,
			price: [5, 10],
		},
		{
			id: 3,
			price: [10, 20],
		},
		{
			id: 4,
			price: [20],
		},
	]

	const mobiFilters: Filter[] = [
		{
			id: 1,
			title: 'Tính năng',
			contents: [
				{
					id: 1,
					name: '2 Sim',
				},
				{
					id: 2,
					name: 'Bảo mật vân tay',
				},
				{
					id: 3,
					name: 'Hỗ trợ 4G',
				},
				{
					id: 4,
					name: 'Pin khủng (>3000 mAh)',
				},
			],
		},
		{
			id: 2,
			title: 'Bộ nhớ',
			contents: [
				{
					id: 1,
					name: '32 GB',
				},
				{
					id: 2,
					name: '64 GB',
				},
				{
					id: 3,
					name: '128 GB',
				},
				{
					id: 4,
					name: '256 GB',
				},
			],
		},
	]

	const mobiProducts: any[] = [
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

	return (
		<Box>
			<SliderMini sliders={mobiSliders} />
			<BreadcrumbsPath breadcrumbs={breadcrumbsMobiPhone} />
			<FilterProduct
				brands={mobiBrands}
				total={100}
				prices={mobiPrices}
				filters={mobiFilters}
				products={mobiProducts}
			/>
		</Box>
	)
}

export default MobilePhone
