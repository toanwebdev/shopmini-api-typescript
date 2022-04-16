import './DetailDesciption.scss'
import parserHtml from 'html-react-parser'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

interface IDetailDescriptionProps {
	description: string
}

const DetailDescription = ({ description }: IDetailDescriptionProps) => {
	const [showDescription, setShowDescription] = useState(false)

	return (
		<Box
			className={`detailDescription ${
				showDescription ? 'detailDescription__show' : ''
			}`}>
			{/* description */}
			<Box className='detailDescription__title'>Thông tin sản phẩm</Box>
			<Box>
				{parserHtml(description)}
				{!showDescription && (
					<Box className='detailDescription__content__article'></Box>
				)}
			</Box>
			<Box className='detailDescription__btn__wrapper'>
				<Button
					variant='outlined'
					className='detailDescription__btn'
					onClick={() => setShowDescription(!showDescription)}>
					{showDescription ? 'Thu gọn' : 'Xem thêm'}
				</Button>
			</Box>
			{/* description */}
		</Box>
	)
}

export default DetailDescription
