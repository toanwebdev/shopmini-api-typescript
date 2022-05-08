import { Box } from '@mui/material'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { Image } from '../../../../interfaces'
import './DetailSlider.scss'

interface IDetailSliderProps {
	imgs: Image[]
	colors: any[]
}

const DetailSlider = ({ imgs, colors }: IDetailSliderProps) => {
	const sliderRef: any = useRef()
	const [colorId, setColorId] = useState(colors[0].id)

	const settings = {
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		ref: sliderRef,
	}

	return (
		<Box className='detailSlider'>
			{/* slider */}
			<Box className='detailSlider__slider'>
				<Box
					className='detailSlider__slider__icon detailSlider__slider__icon__prev'
					onClick={() => sliderRef.current.slickPrev()}>
					<i className='bx bx-chevron-left'></i>
				</Box>
				<Slider {...settings}>
					{imgs.map((img) => (
						<img
							key={`detailSlider-slider-${img.id}`}
							src={img.link}
							alt={img.name}
							className='detailSlider__slider__img'
						/>
					))}
				</Slider>
				<Box
					className='detailSlider__slider__icon detailSlider__slider__icon__next'
					onClick={() => sliderRef.current.slickNext()}>
					<i className='bx bx-chevron-right'></i>
				</Box>
			</Box>
			{/* slider */}

			{/* color */}
			<Box className='detailSlider__btn'>
				{colors.map((color) => (
					<Box
						key={`detailSlider-color-${color.id}`}
						className='detailSlider__btn__item'
						onClick={() => setColorId(color.id)}>
						<Box
							className={`detailSlider__btn__item__img ${
								color.id === colorId
									? 'detailSlider__btn__item__img__active'
									: ''
							}`}>
							<img src={color.avatar} alt={color.name} />
						</Box>
						<span>{color.name}</span>
					</Box>
				))}
			</Box>
			{/* color */}
		</Box>
	)
}

export default DetailSlider
