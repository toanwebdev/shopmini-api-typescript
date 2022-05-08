import { Box } from '@mui/material'
import { Bar } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import './CardChart.scss'

interface ICard {
	id: number
	icon: string
	count: string
	title: string
}

const CardChart = () => {
	const cards: ICard[] = [
		{
			id: 1,
			icon: 'bx bx-shopping-bag',
			count: '1,995',
			title: 'Tổng doanh số',
		},
		{
			id: 2,
			icon: 'bx bx-cart',
			count: '2,001',
			title: 'Lượt truy cập hàng ngày',
		},
		{
			id: 3,
			icon: 'bx bx-dollar-circle',
			count: '$2,632',
			title: 'Tổng thu nhập',
		},
		{
			id: 4,
			icon: 'bx bx-receipt',
			count: '1,711',
			title: 'Tổng số đơn đặt hàng',
		},
	]

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		BarElement,
		Title,
		Tooltip,
		Legend,
	)

	const chartOptions: any = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			yAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		elements: {
			bar: {
				backgroundColor: '#f15a25',
				borderRadius: 20,
				borderSkipped: 'bottom',
			},
		},
	}

	const data = {
		revenueSummary: {
			title: 'Revenue',
			value: '$678',
			chartData: {
				labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
				data: [300, 300, 280, 380, 200, 300, 280, 350],
			},
		},
		revenueByChannel: [
			{
				title: 'Direct',
				value: 70,
			},
			{
				title: 'External search',
				value: 40,
			},
			{
				title: 'Referal',
				value: 60,
			},
			{
				title: 'Social',
				value: 30,
			},
		],
		revenueByMonths: {
			labels: [
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'July',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
				'Jan',
			],
			data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
		},
	}

	const chartData = {
		labels: data.revenueByMonths.labels,
		datasets: [
			{
				label: 'Revenue',
				data: data.revenueByMonths.data,
			},
		],
	}

	return (
		<Box className='cardChart__admin'>
			<Box className='cardChart__admin__card'>
				{cards.map((card) => (
					<Box
						key={`cardChart-admin-card-item-${card.id}`}
						className='cardChart__admin__card__item'>
						<Box className='cardChart__admin__card__item__icon'>
							<i className={card.icon}></i>
						</Box>
						<Box className='cardChart__admin__card__item__info'>
							<Box>{card.count}</Box>
							<span>{card.title}</span>
						</Box>
					</Box>
				))}
			</Box>

			<Box className='cardChart__admin__chart'>
				<Box className='cardChart__admin__chart__title'>
					Doanh thu theo tháng
				</Box>
				<Box>
					<Bar options={chartOptions} data={chartData} height='200px' />
				</Box>
			</Box>
		</Box>
	)
}

export default CardChart
