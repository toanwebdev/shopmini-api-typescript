import { Box } from '@mui/material'
import { useAppDispatch } from '../../../app/hook'
import { Image } from '../../../interfaces'
import {
	uploadFileAddItem,
	uploadFileDelItem,
} from '../../../slices/uploadFileSlice'
import './UploadFile.scss'

interface IUploadFileProps {
	colorId: number
	size: 'small' | 'medium'
	image: Image
	index: number
	disable?: boolean
	multiple?: boolean
}

const UploadFile = ({
	colorId,
	size,
	image,
	index,
	disable,
	multiple,
}: IUploadFileProps) => {
	const dispatch = useAppDispatch()

	const handleFileChange = (e: any) => {
		const fileItems = e.target.files

		if (fileItems) {
			for (let i = 0; i < fileItems.length; i++) {
				const filename = fileItems[i].name
				const fileItemCopy = fileItems[i]

				const reader = new FileReader()
				reader.readAsDataURL(fileItems[i])
				reader.onload = () => {
					if (reader.readyState === 2) {
						dispatch(
							uploadFileAddItem({
								file: fileItemCopy,
								image: {
									id: '-1',
									name: filename,
									link: reader.result as string,
									colorId: colorId,
								},
							}),
						)
					}
				}
			}
		}
	}

	const handleFileDel = () => {
		dispatch(uploadFileDelItem({ colorId, indexImage: index }))
	}

	return (
		<Box
			sx={{
				width: `${size === 'small' ? '200px' : '100%'}`,
				display: `${disable ? 'none' : 'block'}`,
			}}
			className={image ? 'uploadFile__image__wrapper' : ''}>
			<label htmlFor={`upload-file-${colorId}`}>
				<input
					id={`upload-file-${colorId}`}
					type='file'
					name='upload-file'
					style={{ display: 'none' }}
					multiple={multiple}
					onChange={handleFileChange}
				/>

				{image.link ? (
					<img
						src={image.link}
						alt=''
						className='uploadFile__image'
						style={size === 'small' ? { height: '180px' } : { height: '350px' }}
					/>
				) : (
					<Box
						className='uploadFile__upload'
						sx={size === 'small' ? { height: '180px' } : { height: '350px' }}>
						<i
							className='bx bxs-cloud-upload'
							style={
								size === 'small' ? { fontSize: '30px' } : { fontSize: '70px' }
							}></i>
						<p>Tải ảnh lên</p>
					</Box>
				)}
			</label>

			{image.link && (
				<Box className='uploadFile__image__close__wrapper'>
					<i
						className='bx bx-x uploadFile__image__close'
						onClick={handleFileDel}></i>
				</Box>
			)}
		</Box>
	)
}

export default UploadFile
