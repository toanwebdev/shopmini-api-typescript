import {
	Box,
	Button,
	Input,
	Modal,
	Rating,
	TextareaAutosize,
} from '@mui/material'
import { useState } from 'react'
import { Rate } from '../../../../interfaces'
import numberWithCommas from '../../../../utils/numberWithCommas'
import * as Yup from 'yup'
import './DetailRatingForm.scss'
import { Form, Formik } from 'formik'
import InputField from '../../../common/InputField'
import { LoadingButton } from '@mui/lab'

interface IDetailRatingFormProps {
	rateAvg: number
	rateTotal: number
	rates: Rate[]
	name: string
	avatar: string
}

const DetailRatingForm = ({
	rateAvg,
	rateTotal,
	rates,
	name,
	avatar,
}: IDetailRatingFormProps) => {
	const [openRatingModal, setOpenRatingModal] = useState(false)
	const [rate, setRate] = useState<number | null>(null)

	const initialValues = {
		fullname: '',
		phoneNumber: '',
		email: '',
	}

	const InfoSchema = Yup.object().shape({
		fullname: Yup.string()
			.min(5, 'Họ và tên phải có ít nhất 5 ký tự!')
			.max(100, 'Họ và tên chỉ có thể dài 100 ký tự!')
			.required('Họ và tên không thể để trống!'),
		phoneNumber: Yup.string()
			.min(10, 'Số điện thoại phải có ít nhất 10 ký tự!')
			.max(13, 'Số điện thoại chỉ có thể dài 13 ký tự!')
			.required('Số điện thoại không thể để trống!'),
		email: Yup.string().min(10, 'Email phải có ít nhất 10 ký tự!'),
	})

	const onInfoSubmit = () => {}

	return (
		<Box className='detailRatingForm'>
			<span className='detailRatingForm__title'>Đánh giá trung bình</span>

			<Box className='detailRatingForm__table'>
				<Box className='detailRatingForm__table__title'>
					<span className='detailRatingForm__table__title__rate__avg'>
						{rateAvg}/5
					</span>
					<Box className='detailRatingForm__table__title__rate'>
						<Rating
							name='read-only'
							value={rateAvg}
							readOnly
							precision={0.5}
							size='small'
						/>
						<Box>{numberWithCommas(rateTotal as number)} đánh giá</Box>
					</Box>
				</Box>

				<Box className='detailRatingForm__table__content'>
					{rates.map((rate) => (
						<Box
							key={`detailRatingForm-table-content-${rate.id}`}
							className='detailRatingForm__table__content__item'>
							<Box>
								<span>{rate.value}</span>
								<i className='bx bxs-star detailRatingForm__table__content__item__icon'></i>
							</Box>
							<Box className='detailRatingForm__table__content__item__box__wrapper'>
								<span
									className='detailRatingForm__table__content__item__box'
									style={{
										width: `${(rate.total / rateTotal) * 100}%`,
									}}></span>
							</Box>
							<span>{(rate.total / rateTotal) * 100}%</span>
						</Box>
					))}

					<Box className='detailRatingForm__table__content__rateBtn__wrapper'>
						<Button
							variant='contained'
							className='detailRatingForm__table__content__rateBtn'
							endIcon={<i className='bx bx-paper-plane'></i>}
							onClick={() => setOpenRatingModal(true)}>
							Viết đánh giá
						</Button>
					</Box>

					<Modal
						open={openRatingModal}
						onClose={() => setOpenRatingModal(false)}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'
						className='detailRatingForm__table__content__modal__wrapper'>
						<Box className='detailRatingForm__table__content__modal'>
							<Box className='detailRatingForm__table__content__modal__title'>
								<span>Đánh giá sản phẩm</span>
								<i
									className='bx bx-message-square-x'
									onClick={() => setOpenRatingModal(false)}></i>
							</Box>

							<Box className='detailRatingForm__table__content__modal__form'>
								<Box className='detailRatingForm__table__content__modal__form__product'>
									<img src={avatar} alt={name} />
									<span>{name}</span>
								</Box>

								<Box className='detailRatingForm__table__content__modal__form__rating'>
									<span className='detailRatingForm__table__content__modal__form__rating__text'>
										Bạn cảm thấy sản phẩm này như thế nào? (chọn sao nhé):
									</span>
									<Rating
										name='simple-controlled'
										value={rate}
										onChange={(_event, newRate) => {
											setRate(newRate)
										}}
									/>
								</Box>

								{rate && (
									<>
										<Box className='detailRatingForm__table__content__modal__form__comment'>
											<TextareaAutosize
												aria-label='minimum height'
												minRows={5}
												placeholder='Mời bạn chia sẻ thêm một số cảm nhận về sản phẩm ...'
												style={{
													maxWidth: '650px',
													minWidth: '650px',
													maxHeight: '200px',
												}}
											/>
											<label htmlFor='contained-button-file'>
												<Input
													id='contained-button-file'
													type='file'
													style={{ display: 'none' }}
												/>
												<Button
													component='span'
													variant='outlined'
													startIcon={<i className='bx bx-upload'></i>}
													className='detailRatingForm__table__content__modal__form__comment__uploadBtn'>
													Gửi hình chụp thực tế
												</Button>
											</label>
										</Box>

										<Formik
											initialValues={initialValues}
											validationSchema={InfoSchema}
											onSubmit={onInfoSubmit}>
											{({ isSubmitting }: { isSubmitting: boolean }) => (
												<Form>
													<Box className='detailRatingForm__table__content__modal__form__info'>
														<InputField
															required
															fullWidth
															label='Họ và tên'
															name='fullname'
															type='text'
														/>

														<InputField
															required
															fullWidth
															label='Số điện thoại'
															name='phoneNumber'
															type='text'
														/>

														<InputField
															fullWidth
															label='Email'
															name='email'
															type='email'
														/>
													</Box>

													<Box className='detailRatingForm__table__content__modal__form__btn__wrapper'>
														<LoadingButton
															loading={isSubmitting}
															variant='contained'
															className='detailRatingForm__table__content__modal__form__btn'>
															Gửi đánh giá ngay
														</LoadingButton>
													</Box>
												</Form>
											)}
										</Formik>
									</>
								)}
							</Box>
						</Box>
					</Modal>
				</Box>
			</Box>
		</Box>
	)
}

export default DetailRatingForm
