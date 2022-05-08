import { Box, Container, List, ListItem, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'
import { Image } from '../../../interfaces'
import './Footer.scss'

interface IContent {
	id: number
	name: string
	slug: string
}

interface IIntroduce {
	id: number
	title: string
	content: IContent[]
}

interface IContact {
	id: number
	name: string
	link: string
	icon: string
	color: string
}

const Footer = () => {
	const introduces: IIntroduce[] = [
		{
			id: 1,
			title: 'Hệ thống TMB',
			content: [
				{
					id: 1,
					name: 'Giới thiệu TMB',
					slug: 'gioi-thieu',
				},
				{
					id: 2,
					name: 'Trung tâm sửa chữa & bảo hành (08:00 - 20:00)',
					slug: 'trung-tam-sua-chua-bao-hanh',
				},
				{
					id: 3,
					name: 'Trung tâm bảo hành chính hãng',
					slug: 'trung-tam-bao-hanh-chinh-hang',
				},
				{
					id: 4,
					name: 'Hợp tác kinh doanh',
					slug: 'hop-tac-kinh-doanh',
				},
				{
					id: 5,
					name: 'Tuyển dụng',
					slug: 'tuyen-dung',
				},
			],
		},
		{
			id: 2,
			title: 'Hướng dẫn mua hàng',
			content: [
				{
					id: 1,
					name: 'Hướng dẫn mua hàng online',
					slug: 'huong-dan-mua-hang-online',
				},
				{
					id: 2,
					name: 'Hướng dẫn mua hàng trả góp',
					slug: 'huong-dan-mua-hang-tra-gop',
				},
				{
					id: 3,
					name: 'Vận chuyển - thanh toán',
					slug: 'van-chuyen-thanh-toan',
				},
				{
					id: 4,
					name: 'Chính sách đổi trả / bảo hành',
					slug: 'chinh-sach-doi-tra-bao-hanh',
				},
				{
					id: 5,
					name: 'Điều khoản sử dụng',
					slug: 'dieu-khoan-su-dung',
				},
			],
		},
	]

	const contacts: IContact[] = [
		{
			id: 1,
			name: 'Facebook',
			link: 'https://www.facebook.com/toando2001',
			icon: 'bx bxl-facebook-square',
			color: '#2539f1',
		},
		{
			id: 2,
			name: 'Youtube',
			link: 'https://www.youtube.com',
			icon: 'bx bxl-youtube',
			color: '#f1252f',
		},
		{
			id: 3,
			name: '0924212027',
			link: 'tel:',
			icon: 'bx bx-mobile-vibration',
			color: '#f15a25',
		},
	]

	const payments: Image[] = [
		{
			id: '1',
			link: 'https://stcv4.hnammobile.com/v7/images/icon/master_card.svg',
			name: 'sahhdjas',
		},
		{
			id: '2',
			link: 'https://stcv4.hnammobile.com/v7/images/icon/visa.svg',
			name: 'askjdkas',
		},
		{
			id: '3',
			link: 'https://stcv4.hnammobile.com/v7/images/icon/momo.svg',
			name: 'asdikasd',
		},
	]

	return (
		<Box className='footer'>
			<Container style={{ maxWidth: '1200px !important' }}>
				<Box className='footer__wrapper'>
					{introduces.map((item) => (
						<List key={`footer-item-${item.id}`}>
							<ListItem className='footer__item__title'>{item.title}</ListItem>
							{item.content.map((i) => (
								<ListItem
									key={`footer-content-item-${i.id}`}
									className='footer__item__content'>
									<Link to={`/${i.slug}`} className='footer__link'>
										{i.name}
									</Link>
								</ListItem>
							))}
						</List>
					))}

					<Box>
						{/* contact */}
						<Box>
							<Box className='footer__item__title' sx={{ marginTop: '16px' }}>
								Kết nối TMB
							</Box>
							<Box className='footer__contact'>
								{contacts.map((item) => (
									<Box
										className='footer__contact__item'
										key={`footer-contact-item-${item.id}`}>
										<i
											className={`${item.icon} footer__contact__item__icon`}
											style={{ color: item.color }}></i>
										{item.link !== 'tel:' ? (
											<>
												<MuiLink
													href={item.link}
													target='_black'
													style={{ color: 'unset', textDecoration: 'none' }}>
													{item.name}
												</MuiLink>
											</>
										) : (
											<>
												<MuiLink
													href={`${item.link}${item.name}`}
													style={{ color: 'unset', textDecoration: 'none' }}>
													Hotline{' '}
													<span className='footer__contact__item__phone'>
														{item.name}
													</span>
												</MuiLink>
											</>
										)}
									</Box>
								))}
							</Box>
						</Box>
						{/* contact */}

						{/* payment */}
						<Box mt={10}>
							<Box className='footer__item__title' mb={3}>
								Phương thức thanh toán
							</Box>
							<Box className='footer__payment'>
								{payments.map((item) => (
									<Box
										sx={{ marginRight: '20px' }}
										key={`footer-payment-${item.id}`}>
										<img src={item.link} alt={item.name} />
									</Box>
								))}
							</Box>
						</Box>
						{/* payment */}
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Footer
