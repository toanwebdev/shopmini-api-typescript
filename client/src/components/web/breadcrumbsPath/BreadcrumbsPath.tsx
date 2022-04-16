import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../../interfaces'
import './BreadcrumbsPath.scss'

interface IBreadcrumbsProps {
	breadcrumbs: Breadcrumb[]
}

const BreadcrumbsPath = ({ breadcrumbs }: IBreadcrumbsProps) => {
	return (
		<Box className='breadcrumbsPath'>
			{breadcrumbs.map((item, index) => (
				<Box key={`breadcrumbsPath-item-${item.id}`}>
					{index !== breadcrumbs.length - 1 ? (
						<Box>
							<Link to={item.slug} className='breadcrumbsPath__item__link'>
								{item.name}
							</Link>
							<span className='breadcrumbsPath__item__icon'>{'>'}</span>
						</Box>
					) : (
						<span>{item.name}</span>
					)}
				</Box>
			))}
		</Box>
	)
}

export default BreadcrumbsPath
