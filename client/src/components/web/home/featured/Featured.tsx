import { Box } from '@mui/material'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Product, ProductName } from '../../../../interfaces'
import ProductGroup from '../../productGroup/ProductGroup'
import ProductItem from '../../productItem/ProductItem'
import './Featured.scss'

interface IFeaturedProps {
	title: string
	productNames: ProductName[]
	productTotal: number
	products: Product[]
	slider?: boolean
}

const Featured = ({
	title,
	productNames,
	productTotal,
	products,
	slider,
}: IFeaturedProps) => {
	const sliderRef: any = useRef()

	const settings = {
		infinite: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 5,
		ref: sliderRef,
	}

	return (
		<Box className='featured'>
			{/* title */}
			<Box className='featured__title__wrapper'>
				<span className='featured__title'>{title} nổi bật nhất</span>
				<Box className='featured__title__item__wrapper'>
					{productNames.map((item) => (
						<Link
							key={`title-item-${item.id}`}
							to={item.slug}
							className='featured__title__item'>
							{item.name}
						</Link>
					))}
					<Link to='/' className='featured__title__item'>
						Xem tất cả{' '}
						<span className='featured__title__total'>{productTotal}</span>{' '}
						{title}
					</Link>
				</Box>
			</Box>
			{/* title */}

			{/* product */}
			{slider ? (
				<ProductGroup products={products} />
			) : (
				<Box className='featured__product__slider'>
					<Box
						className='featured__product__slider__icon featured__product__slider__icon__prev'
						onClick={() => sliderRef.current.slickPrev()}>
						<i className='bx bx-chevron-left'></i>
					</Box>
					<Slider {...settings}>
						{products.map((item) => (
							<Box key={item.id} className='featured__product__slider__item'>
								<ProductItem
									product={item}
									borderRadius='5px'
									rate={4.5}
									rateTotal={100}
								/>
							</Box>
						))}
					</Slider>
					<Box
						className='featured__product__slider__icon featured__product__slider__icon__next'
						onClick={() => sliderRef.current.slickNext()}>
						<i className='bx bx-chevron-right'></i>
					</Box>
				</Box>
			)}
			{/* product */}
		</Box>
	)
}

export default Featured
