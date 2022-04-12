import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import './SliderProduct.scss'

interface IImage {
	id: number
	link: string
	name: string
	slug: string
}

const SliderProduct = () => {
	const sliderRef: any = useRef()
	const [index, setIndex] = useState(0)
	const [widthPaging, setWithPaging] = useState(0)

	const sliderImgs: IImage[] = [
		{
			id: 1,
			link: 'https://cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Smartphone Gắn Kết - Lì Xì Đến 5 Triệu',
			slug: '',
		},
		{
			id: 2,
			link: '//cdn.tgdd.vn/2022/01/banner/830-300-830x300-1.png',
			name: 'Đồng Hồ Xả Hàng - Giảm Đến 50%++',
			slug: '',
		},
		{
			id: 3,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-26.png',
			name: 'Galaxy S21 FE 5G - Đặt Trước Quà Ngon',
			slug: '',
		},
		{
			id: 4,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Đặt Trước Vivo V23 5G - Rước Bộ Quà 3 Triệu',
			slug: '',
		},
		{
			id: 5,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Đồng Hồ Xả Hàng - Giảm Đến 50%++',
			slug: '',
		},
		{
			id: 6,
			link: '//cdn.tgdd.vn/2021/12/banner/tet-laptop-830-300-830x300.png',
			name: 'Galaxy S21 FE 5G - Đặt Trước Quà Ngon',
			slug: '',
		},
		{
			id: 7,
			link: '//cdn.tgdd.vn/2021/12/banner/830-300-830x300-24.png',
			name: 'Đặt Trước Vivo V23 5G - Rước Bộ Quà 3 Triệu',
			slug: '',
		},
		{
			id: 8,
			link: '//cdn.tgdd.vn/2021/12/banner/tet-laptop-830-300-830x300.png',
			name: 'Smartphone Gắn Kết - Lì Xì Đến 5 Triệu',
			slug: '',
		},
	]

	const bannerImgs: IImage[] = [
		{
			id: 1,
			link: '//cdn.tgdd.vn/2021/12/banner/laptopdesk(1)-340x340.jpg',
			name: 'asdjhasd',
			slug: '',
		},
		{
			id: 2,
			link: 'https://cdn.tgdd.vn/2022/01/banner/laptopdesk(2)-340x340.jpg',
			name: 'sanhdas',
			slug: '',
		},
		{
			id: 3,
			link: 'https://cdn.tgdd.vn/2022/01/banner/laptopdesk-340x340.jpg',
			name: 'asndhassd',
			slug: '',
		},
		{
			id: 4,
			link: 'https://cdn.tgdd.vn/2022/01/banner/tainghe-340x340.jpg',
			name: 'asdhgsashdja',
			slug: '',
		},
	]

	const settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		ref: sliderRef,
		appendDots: (dots: any) => {
			return (
				<Box
					sx={{
						transform: `translateX(-${widthPaging}px)`,
						transition: 'transform 0.3s linear',
					}}
					className='sliderProduct__slider__dots__wrapper'>
					<Box className='sliderProduct__slider__dots'>
						{dots.map((dot: any, idx: number) => (
							<span
								key={dot.key}
								className={
									idx === index ? 'sliderProduct__slider__dots__active' : ''
								}>
								{dot.props.children}
							</span>
						))}
					</Box>
				</Box>
			)
		},
		customPaging: (index: number) => (
			<Box className='sliderProduct__slider__alt'>{sliderImgs[index].name}</Box>
		),
		beforeChange: (_current: number, next: number) => {
			let value = 3

			if (sliderImgs.length - next < 3) {
				value = sliderImgs.length - next
			}
			if (next >= index) {
				if (next <= 4) {
					setWithPaging(0)
				} else if (next === 5 || (next - 5) % value === 0) {
					setWithPaging(widthPaging + value * 156)
				}
				if (next === sliderImgs.length - 1) {
					setWithPaging((sliderImgs.length - 5) * 156)
				}
			} else {
				if (next === 0) {
					setWithPaging(0)
				}
				if (
					next === sliderImgs.length - 6 ||
					(next < sliderImgs.length - 6 && (next - 5) % value === 0)
				) {
					setWithPaging(widthPaging - value * 156)
				}
			}
			setIndex(next)
		},
	}
	return (
		<Box className='sliderProduct'>
			{/* slider */}
			<Box className='sliderProduct__slider'>
				<Box
					className='sliderProduct__slider__icon sliderProduct__slider__icon__prev'
					onClick={() => sliderRef.current.slickPrev()}>
					<i className='bx bx-chevron-left'></i>
				</Box>
				<Slider {...settings}>
					{sliderImgs.map((img) => (
						<Link key={`slider-${img.id}`} to={img.slug}>
							<img
								src={img.link}
								alt={img.name}
								className='sliderProduct__slider__img'
							/>
						</Link>
					))}
				</Slider>
				<Box
					className='sliderProduct__slider__icon sliderProduct__slider__icon__next'
					onClick={() => sliderRef.current.slickNext()}>
					<i className='bx bx-chevron-right'></i>
				</Box>
			</Box>
			{/* slider */}

			{/* banner img */}
			<Box className='sliderProduct__banner'>
				{bannerImgs.map((img) => (
					<Link key={`bannerImg-${img.id}`} to={img.slug}>
						<img
							src={img.link}
							alt={img.name}
							className='sliderProduct__banner__img'
						/>
					</Link>
				))}
			</Box>
			{/* banner img */}
		</Box>
	)
}

export default SliderProduct
