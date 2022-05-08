import { Box } from '@mui/material'
import BreadcrumbsPath from '../../components/web/breadcrumbsPath/BreadcrumbsPath'
import DetailDescription from '../../components/web/detailProduct/detailDesciption/DetailDescription'
import DetailPayment from '../../components/web/detailProduct/detailPayment/DetailPayment'
import DetailRatingComment from '../../components/web/detailProduct/detailRatingComment/DetailRatingComment'
import DetailRatingForm from '../../components/web/detailProduct/detailRatingForm/DetailRatingForm'
import DetailSlider from '../../components/web/detailProduct/detailSlider/DetailSlider'
import DetailSpecifications from '../../components/web/detailProduct/detailSpecifications/DetailSpecifications'
import DetailTitle from '../../components/web/detailProduct/detailTitle/DetailTitle'
import { Breadcrumb, Image, Rate, Specifications } from '../../interfaces'

const DetailMobiPhone = () => {
	const product = {
		id: 1,
		avatar:
			'https://cdn.tgdd.vn/Products/Images/42/233090/Samsung-Galaxy-S21-FE-trang-1-2-600x600.jpg',
		name: 'Samsung Galaxy S21 FE 5G (8GB/128GB)',
		priceImport: 26000000,
		price: 28190000,
		priceDiscount: 27000000,
		installment: false,
		discount: false,
		new: true,
		gift: 1880000,
		slug: 'samsung-galaxy-s21-fe',
	}

	const breadcrumbsDetail: Breadcrumb[] = [
		{
			id: 1,
			name: 'Trang chủ',
			slug: '/',
		},
		{
			id: 2,
			name: 'Điện thoại',
			slug: '/dien-thoai',
		},
		{
			id: 3,
			name: product.name,
			slug: `/${product.slug}`,
		},
	]

	const detailImgs: Image[] = [
		{
			id: '1',
			link: '//cdn.tgdd.vn/Products/Images/42/267871/xiaomi-redmi-note-11s-1-5.jpg',
			name: 'Xiaomi Redmi Note 11S',
		},
		{
			id: '2',
			link: '//cdn.tgdd.vn/Products/Images/42/267871/xiaomi-redmi-note-11s-2-4.jpg',
			name: 'Xiaomi Redmi Note 11S',
		},
		{
			id: '3',
			link: '//cdn.tgdd.vn/Products/Images/42/267871/xiaomi-redmi-note-11s-3-4.jpg',
			name: 'Xiaomi Redmi Note 11S',
		},
		{
			id: '4',
			link: '//cdn.tgdd.vn/Products/Images/42/267871/xiaomi-redmi-note-11s-4-3.jpg',
			name: 'Xiaomi Redmi Note 11S',
		},
	]

	const detailColors: any[] = [
		{
			id: 1,
			name: 'Bạc',
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-1-1-200x200.jpg',
		},
		{
			id: 2,
			name: 'Đen',
			avatar:
				'https://cdn.tgdd.vn/Products/Images/42/271717/oppo-reno7-z-5g-thumb-2-1-200x200.jpg',
		},
	]

	const description =
		'OPPO đã trình làng mẫu Reno7 Z 5G với thiết kế OPPO Glow độc quyền, camera mang hiệu ứng như máy DSLR chuyên nghiệp cùng viền sáng kép, máy có một cấu hình mạnh mẽ và đạt chứng nhận xếp hạng A về độ mượt.Dễ dàng nổi bật giữa đám đôĐiện thoại OPPO Reno7 Z 5G có khung viền vát phẳng, vuông vức trendy làm cho máy toát lên nét hiện đại và năng động. Bốn góc được bo cong mềm mại tạo cảm giác thoải mái và nhẹ nhàng (chỉ 173 g). Với thiết kế nguyên khối làm tổng thể máy trở nên cực kỳ chắc chắn, không chỉ đẹp mà còn tăng độ bền.Thiết kế khung viền phẳng - OPPO Reno7 Z 5GĐiểm ấn tượng nhất trên Reno7 Z là dùng thiết kế OPPO Glow độc quyền, mang đến một mặt lưng tinh tế, có thể chuyển màu sắc khi thay đổi góc nhìn. Máy có 2 phiên bản màu: Đen Vô Cực sang trọng, tinh tế và Bạc Đa Sắc nổi bật. Dù lựa chọn phiên bản màu nào thì mặt lưng máy cũng được phủ nhám giúp hạn chế tình trạng bám vân tay và mồ hôi, cho điện thoại sẽ luôn giữ được vẻ “sang chảnh” mọi lúc.Màu sắc trendy - OPPO Reno7 Z 5GCụm camera sau ở góc trên bên trái, được tích hợp viền sáng kép độc đáo, làm nên sự khác biệt cho Reno7 Z. Khi có thông báo cuộc gọi, tin nhắn hoặc lúc sạc pin, viền sáng kép sẽ sáng lên đồng thời hoặc nhấp nháy. Để bật/tắt tính năng viền sáng này, bạn chỉ cần vào “Cài Đặt -> Cá Nhân Hóa -> Đèn Thở” và chọn kích hoạt.Viền sáng kép độc đáo - OPPO Reno7 Z 5Tổng quan về 4 cạnh của máy bao gồm cạnh trên đặt micro thu âm phụ, cạnh phải là nút nguồn, cạnh trái có cụm phím tăng/giảm âm lượng cùng khe để SIM và cạnh dưới ta có jack tai nghe 3.5 mm, mic thoại, cổng Type-C và loa ngoài.Các cạnh sản phẩm - OPPO Reno7 Z 5GBật mở chân dung vô hạnĐối với dòng Reno Series, OPPO đánh mạnh vào phần trải nghiệm camera, Reno7 Z trang bị cụm 3 camera sau với cảm biến chính độ phân giải 64 MP, ống kính macro 2 MP và camera chụp ảnh xoá phông 2 MP.Cụm camera - OPPO Reno7 Z 5GChúng ta sẽ có những bức ảnh siêu lung linh chỉ sau 1 động tác nhấn chụp nhờ khả năng chụp ảnh chân dung với tính năng Bokeh Flare. Phần phông nền sẽ được làm mờ với hiệu ứng tương tự các máy ảnh cơ DSLR. Độ chuyển giữa các vùng trong hình rất mượt mà, không tạo cảm giác giả tạo hay bị cố gắng xoá nhoè bằng thuật toán.Bokeh Flare - OPPO Reno7 Z 5GVới chế độ chân dung màu AI sẽ giúp bạn trở thành tâm điểm của mỗi bức hình, chỉ phần chủ thể giữ lại màu sắc, phông nền trắng đen giúp cho ảnh chụp của bạn thêm phần ấn tượng hơn, cũng như có rất nhiều bộ lọc có sẵn để bạn lựa chọn phù hợp với phong cách ảnh chụp.'

	const specificationsArray: Specifications[] = [
		{
			id: '1',
			name: 'Màn hình',
			content: 'AMOLED, 6.43", Full HD+',
		},
		{
			id: '2',
			name: 'Hệ điều hành',
			content: 'Android 11',
		},
		{
			id: '3',
			name: 'Camera sau',
			content: 'Chính 64 MP & Phụ 2 MP, 2 MP',
		},
		{
			id: '4',
			name: 'Camera trước',
			content: '16 MP',
		},
		{
			id: '5',
			name: 'Chip',
			content: 'Snapdragon 695 5G 8 nhân',
		},
		{
			id: '6',
			name: 'RAM',
			content: '8 GB',
		},
		{
			id: '7',
			name: 'Bộ nhớ trong',
			content: '128 GB',
		},
		{
			id: '8',
			name: 'SIM',
			content: ' 2 Nano SIM (SIM 2 chung khe thẻ nhớ), Hỗ trợ 5G ',
		},
		{
			id: '9',
			name: 'Pin, Sạc',
			content: ' 4500 mAh, 33 W ',
		},
	]

	const rates: Rate[] = [
		{
			id: 1,
			value: 5,
			total: 4,
		},
		{
			id: 2,
			value: 4,
			total: 10,
		},
		{
			id: 3,
			value: 3,
			total: 3,
		},
		{
			id: 4,
			value: 2,
			total: 2,
		},
		{
			id: 5,
			value: 1,
			total: 1,
		},
	]

	return (
		<Box>
			<BreadcrumbsPath breadcrumbs={breadcrumbsDetail} />
			<DetailTitle name={product.name} rate={4} rateTotal={100} />
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: '700px 420px',
					gridGap: '40px',
				}}>
				<Box>
					<DetailSlider imgs={detailImgs} colors={detailColors} />
					<DetailDescription description={description} />
					<DetailRatingComment rateTotal={5} name={product.name} />
				</Box>

				<Box>
					<DetailPayment price={14000000} installment colors={detailColors} />
					<DetailSpecifications
						name={product.name}
						specificationsArray={specificationsArray}
					/>
					<DetailRatingForm
						rateAvg={4}
						rateTotal={20}
						rates={rates}
						name={product.name}
						avatar={product.avatar}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default DetailMobiPhone
