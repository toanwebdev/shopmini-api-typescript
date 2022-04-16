import { Box, Rating } from '@mui/material'
import numberWithCommas from '../../../../utils/numberWithCommas'
import './DetailTitle.scss'

interface IDetailTitleProps {
	name: string
	rate?: number
	rateTotal?: number
}

const DetailTitle = ({ name, rate, rateTotal }: IDetailTitleProps) => {
	return (
		<Box className='detailTitle'>
			<span className='detailTitle__name'>{name}</span>

			{rate && rate !== 0 && (
				<Box className='detailTitle__rate'>
					<Rating
						name='read-only'
						value={rate}
						readOnly
						precision={0.5}
						size='small'
					/>
					<Box>
						<span className='detailTitle__rate__total'>
							{numberWithCommas(rateTotal as number)}
						</span>{' '}
						đánh giá
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default DetailTitle
