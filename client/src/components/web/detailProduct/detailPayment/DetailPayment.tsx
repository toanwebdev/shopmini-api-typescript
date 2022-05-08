import {
	Box,
	Button,
	ButtonGroup,
	FormControlLabel,
	Radio,
	RadioGroup,
} from '@mui/material'
import { useState } from 'react'
import numberWithCommas from '../../../../utils/numberWithCommas'
import './DetailPayment.scss'

interface IDetailPaymentProps {
	price: number
	installment?: boolean
	colors: any[]
}

const DetailPayment = ({ price, installment, colors }: IDetailPaymentProps) => {
	const [colorId, setColorId] = useState(colors[0].id)
	const [quantity, setQuantity] = useState(1)

	return (
		<Box className='detailPayment'>
			<Box className='detailPayment__price__wrapper'>
				<span className='detailPayment__price'>
					{numberWithCommas(price)} ₫
				</span>
				{installment && (
					<span className='detailPayment__price__box'>Trả góp 0%</span>
				)}
			</Box>

			<Box className='detailPayment__color'>
				<span className='detailPayment__color__title'>Màu sắc:</span>
				<RadioGroup
					row
					name='row-radio-buttons-group'
					defaultValue={colorId}
					onChange={(e: any) => setColorId(parseInt(e.target.value))}
					className='detailPayment__color__btn'>
					{colors.map((color) => (
						<Box
							key={`detailPayment-color-${color.id}`}
							className='detailPayment__color__btn__item'>
							<FormControlLabel
								value={color.id}
								control={
									<Radio
										size='small'
										sx={{
											color: '#f15a25',
											'&.Mui-checked': {
												color: '#f15a25',
											},
										}}
									/>
								}
								label={
									<Box
										className={`detailPayment__color__btn__item__img ${
											color.id === colorId
												? 'detailPayment__color__btn__item__img__active'
												: ''
										}`}>
										<img src={color.avatar} alt={color.name} />
									</Box>
								}
								labelPlacement='top'
							/>

							<span>{color.name}</span>
						</Box>
					))}
				</RadioGroup>
			</Box>

			<Box className='detailPayment__quantity'>
				<span className='detailPayment__quantity__title'>Số lượng:</span>

				<Box className='detailPayment__quantity__btn'>
					<ButtonGroup
						variant='outlined'
						size='small'
						aria-label='outlined button group'>
						<Button
							className='detailPayment__quantity__btn__item'
							onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
							<i className='bx bx-minus'></i>
						</Button>
						<Button className='detailPayment__quantity__btn__item'>
							{quantity}
						</Button>
						<Button
							className='detailPayment__quantity__btn__item'
							onClick={() => setQuantity(quantity < 99 ? quantity + 1 : 99)}>
							<i className='bx bx-plus'></i>
						</Button>
					</ButtonGroup>
				</Box>
			</Box>

			<Box className='detailPayment__buy'>
				<Button
					variant='contained'
					fullWidth
					className='detailPayment__buy__btn detailPayment__buy__btn__now'>
					Mua ngay
				</Button>
				<Button
					variant='contained'
					fullWidth
					className='detailPayment__buy__btn'>
					Mua trả góp 0%
				</Button>
			</Box>
		</Box>
	)
}

export default DetailPayment
