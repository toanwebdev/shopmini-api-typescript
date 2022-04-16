import { Box } from '@mui/material'
import { useRef } from 'react'
import Slider from 'react-slick'
import { Image } from '../../../interfaces'
import './SliderMini.scss'

interface ISliderMiniProps {
	sliders: Image[]
}

const SliderMini = ({ sliders }: ISliderMiniProps) => {
	const sliderRef: any = useRef()

	const settings = {
		infinite: true,
		arrows: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		ref: sliderRef,
	}

	return (
		<Box className='sliderMini'>
			<Slider {...settings}>
				{sliders.map((item) => (
					<Box key={`sliderMini-item-${item.id}`} className='sliderMini__item'>
						<img src={item.link} alt={item.name} />
					</Box>
				))}
			</Slider>
		</Box>
	)
}

export default SliderMini
