import { Box, IconButton, Modal } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../../app/hook'
import { modalClose } from '../../../../slices/modalSlice'
import './ViewProductModal.scss'

const ViewProductModal = () => {
	const dispatch = useAppDispatch()
	const open = useAppSelector((state) => state.modal.onOpen)

	return (
		<Box className='viewProductModal'>
			<Modal
				open={open}
				onClose={() => dispatch(modalClose())}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				className='viewProductModal__modal__wrapper'>
				<Box className='viewProductModal__modal'>
					<Box className='viewProductModal__modal__title'>
						<span>Xem chi tiết sản phẩm</span>
						<IconButton onClick={() => dispatch(modalClose())}>
							<i className='bx bx-message-square-x'></i>
						</IconButton>
					</Box>
				</Box>
			</Modal>
		</Box>
	)
}

export default ViewProductModal
