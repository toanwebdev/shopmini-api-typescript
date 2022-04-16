import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { Specifications } from '../../../../interfaces'
import './DetailSpecifications.scss'

interface IDetailSpecificationsProps {
	name: string
	specificationsArray: Specifications[]
}

const DetailSpecifications = ({
	name,
	specificationsArray,
}: IDetailSpecificationsProps) => {
	const [showSpecis, setShowSpecis] = useState(false)

	return (
		<Box className='detailSpecifications'>
			<span className='detailSpecifications__title'>
				Thông số kỹ thuật {name}
			</span>
			<Box className='detailSpecifications__table'>
				{specificationsArray.map((specifications, index) => (
					<Box key={`detailSpecifications-table-item-${specifications.id}`}>
						{!showSpecis ? (
							<>
								{index < 7 ? (
									<Box
										key={`detailSpecifications-specifications-${specifications.id}`}
										className={`detailSpecifications__table__item ${
											index % 2 === 0
												? 'detailSpecifications__table__item__color'
												: ''
										}`}>
										<span>{specifications.name}:</span>
										<span>{specifications.value}</span>
									</Box>
								) : null}
							</>
						) : (
							<Box
								key={`detailSpecifications-specifications-${specifications.id}`}
								className={`detailSpecifications__table__item ${
									index % 2 === 0
										? 'detailSpecifications__table__item__color'
										: ''
								}`}>
								<span>{specifications.name}:</span>
								<span>{specifications.value}</span>
							</Box>
						)}
					</Box>
				))}
			</Box>

			<Box className='detailSpecifications__btn__wrapper'>
				<Button
					variant='outlined'
					className='detailSpecifications__btn'
					onClick={() => setShowSpecis(!showSpecis)}>
					{showSpecis ? 'Thu gọn' : 'Xem thêm'}
				</Button>
			</Box>
		</Box>
	)
}

export default DetailSpecifications
