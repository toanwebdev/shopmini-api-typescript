import { Box } from '@mui/material'
import numberWithCommas from '../../../../utils/numberWithCommas'
import './DetailRatingComment.scss'

interface IDetailRatingCommentProps {
	rateTotal: number
	name: string
}

const DetailRatingComment = ({
	rateTotal,
	name,
}: IDetailRatingCommentProps) => {
	return (
		<Box className='detailRatingComment'>
			<span className='detailRatingComment__title'>
				Có {numberWithCommas(rateTotal)} đánh giá về Sản phẩm {name}
			</span>
		</Box>
	)
}

export default DetailRatingComment
