import { LoadingButton, TabContext, TabList, TabPanel } from '@mui/lab'
import {
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	IconButton,
	InputLabel,
	MenuItem,
	Modal,
	Select,
	Tab,
	TextField,
	Tooltip
} from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import { Form, Formik } from 'formik'
import { SyntheticEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import categoryApi from '../../../../api/categoryApi'
import categoryBrandApi from '../../../../api/categoryBrandApi'
import colorApi from '../../../../api/colorApi'
import imageApi from '../../../../api/imageApi'
import productApi from '../../../../api/productApi'
import productColorApi from '../../../../api/productColorApi'
import specificationsApi from '../../../../api/specificationsApi'
import uploadFileApi from '../../../../api/uploadFileApi'
import { useAppDispatch, useAppSelector } from '../../../../app/hook'
import { Brand, Category, Color, Product } from '../../../../interfaces'
import { callApiEnd, callApiStart } from '../../../../slices/callApiSlice'
import { modalClose } from '../../../../slices/modalSlice'
import {
	uploadFileAdd,
	uploadFileDel,
	uploadFileReset
} from '../../../../slices/uploadFileSlice'
import slugify from '../../../../utils/slugify'
import CheckBoxField from '../../../common/CheckBoxField'
import InputField from '../../../common/InputField'
import SelectField from '../../../common/SelectField'
import UploadFile from '../../uploadFile/UploadFile'
import './AddOrEditProductModal.scss'

interface ISpeci {
	id: string
	name: string
	content: string
}

interface IAddOrEditProductModalProps {
	product?: Product
}

const AddOrEditProductModal = ({product}: IAddOrEditProductModalProps) => {
	const dispatch = useAppDispatch()

	const open = useAppSelector((state) => state.modal.onOpen)
	const initFiles = useAppSelector((state) => state.uploadFile)
	const user = useAppSelector((state) => state.auth.user)

	const [allColor, setAllColor] = useState<Color[]>([])
	const [allCategory, setAllCategory] = useState<Category[]>([])
	const [categoryId, setCategoryId] = useState<string>('')
	const [brands, setBrands] = useState<Brand[]>([])

	useEffect(() => {
		dispatch(callApiStart())
		const getAllColor = async () => {
			const data = await colorApi.getAllColor()
			setAllColor(data)
		}

		const getAllCategory = async () => {
			const data = await categoryApi.getAllCategory()
			setAllCategory(data)
		}

		getAllColor()
		getAllCategory()
		dispatch(callApiEnd())
	}, [dispatch])

	useEffect(() => {
		dispatch(callApiStart())
		const getBrandsByCategoryId = async () => {
			const data = await categoryBrandApi.getBrandsByCategoryId(categoryId)
			setBrands(data)
		}

		getBrandsByCategoryId()
		dispatch(callApiEnd())
	}, [dispatch, categoryId])

	const [colors, setColors] = useState<Color[]>([])
	const [specis, setSpecis] = useState<ISpeci[]>([
		{ id: '-1', name: '', content: '' },
	])
	const [tabActive, setTabActive] = useState<string>('0')
	const [description, setDescription] = useState('')
	const [nameProduct, setNameProduct] = useState('')
	const [slugProduct, setSlugProduct] = useState('')

	const handleTabChange = (_event: SyntheticEvent, newValue: string) => {
		setTabActive(newValue)
	}

	const handleColorChange = (e: any) => {
		const vtColor = colors.findIndex((color) => color.id === e.target.value)

		let newColors: Color[]

		if (vtColor !== -1) {
			colors.splice(vtColor, 1)
			newColors = [...colors]
			dispatch(uploadFileDel(parseInt(e.target.value)))
			setTabActive('0')
		} else {
			newColors = [...colors, { id: e.target.value, name: e.target.name }]
			dispatch(uploadFileAdd(parseInt(e.target.value)))
		}
		setColors(newColors)
	}

	const handleSpeciChange = (
		e: any,
		type: 'name' | 'content',
		index: number,
	) => {
		specis.splice(index, 1, {
			id: e.target.name,
			name: type === 'name' ? e.target.value : specis[index].name,
			content: type === 'content' ? e.target.value : specis[index].content,
		})
		const newSpecis: ISpeci[] = [...specis]
		setSpecis(newSpecis)
	}

	const handleAddSpeci = (index: number) => {
		specis.splice(index + 1, 0, { id: '-1', name: '', content: '' })
		setSpecis([...specis])
	}

	const handleDelSpeci = (index: number) => {
		if (index > 0) {
			specis[index].name = 'del'
			specis[index].content = 'del'
			setSpecis([...specis])
		}
	}

	const handleNameProductChange = (e: any) => {
		setNameProduct(e.target.value)
		setSlugProduct(slugify(e.target.value))
	}

	const handleSlugProductChange = (e: any) => {
		setSlugProduct(e.target.value)
	}

	const handleUpload = (cb: any) => {
		let input = document.createElement('input')
		input.setAttribute('type', 'file')
		input.setAttribute('accept', 'image/*')

		input.onchange = async (e: any) => {
			const file = e.target.files[0]
			if (file) {
				const formData = new FormData()
				formData.append('upload-file', file)

				await uploadFileApi.uploadFile(formData)

				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => {
					cb(reader.result as string)
				}
			}
		}

		input.click()
	}

	const initialValues: Product = {
		name: '',
		slug: '',
		avatar: '',
		priceImport: '',
		price: '',
		priceDiscount: '',
		gift: '',
		quantity: 0,
		description: '',
		installment: false,
		new: false,
		discount: false,
		categoryId: '',
		brandId: '',
		userCreatedId: user?.id as string,
		userUpdatedId: user?.id as string,
	}

	const addOrEditProductSchema = Yup.object().shape({
		name: Yup.string()
			.min(20, 'Tên sản phẩm phải có ít nhất 20 ký tự!')
			.max(200, 'Tên sản phẩm chỉ có thể dài 200 ký tự!')
			.required('Tên sản phẩm không thể để trống!'),
		priceImport: Yup.string().required('Giá nhập sản phẩm không thể để trống!'),
		price: Yup.string().required('Giá bán sản phẩm không thể để trống!'),
	})

	const onAddOrEditProductSubmit = async (values: Product) => {
		dispatch(callApiStart())
		try {
			values.categoryId = categoryId
			values.description = description
			values.slug = slugProduct
			values.priceImport = parseInt(values.priceImport as unknown as string)
			values.price = parseInt(values.price as unknown as string)
			values.priceDiscount = parseInt(
				values.priceDiscount
					? (values.priceDiscount as unknown as string)
					: '0',
			)
			values.gift = parseInt(
				values.gift ? (values.gift as unknown as string) : '0',
			)

			const formData = new FormData()
			for (let i = 0; i < initFiles.length; i++) {
				for (let j = 0; j < initFiles[i].files.length; j++) {
					if (initFiles[i].files[j] && initFiles[i].files[j] !== 'del') {
						formData.append('upload-file', initFiles[i].files[j])
					}
				}
			}

			const imageNames: string[] = await uploadFileApi.uploadFile(formData)

			values.avatar = '/public/images/' + imageNames[0]

			const addProductData: Product = await productApi.addProduct(values)

			for (let i = 0; i < specis.length; i++) {
				const { id, ...others } = specis[i]
				if (id === '-1') {
					await specificationsApi.addSpecifications({
						...others,
						productId: parseInt(addProductData.id as string),
					})
				} else {
					await specificationsApi.editSpecifications({
						...specis[i],
						productId: parseInt(addProductData.id as string),
					})
				}
			}

			let vt = 1
			for (let i = 0; i < colors.length; i++) {
				await productColorApi.addProductColor({
					colorId: parseInt(colors[i].id),
					productId: parseInt(addProductData.id as string),
					avatar: '/public/images/' + imageNames[vt],
				})

				const vtColor = initFiles.findIndex(
					(file) => file.colorId === parseInt(colors[i].id),
				)

				for (let j = 0; j < initFiles[vtColor].images.length; j++) {
					if (
						initFiles[vtColor].images[j].name &&
						initFiles[vtColor].images[j].name !== 'del'
					) {
						vt++
					}
				}
			}

			vt = 1
			for (let i = 1; i < initFiles.length; i++) {
				for (let j = 0; j < initFiles[i].images.length; j++) {
					if (
						initFiles[i].images[j].name &&
						initFiles[i].images[j].name !== 'del'
					) {
						const { id } = initFiles[i].images[j]
						if (id === '-1') {
							await imageApi.addImage({
								link: '/public/images/' + imageNames[vt],
								name: imageNames[vt],
								colorId: initFiles[i].colorId,
								productId: parseInt(addProductData.id as string),
							})
						} else {
							await imageApi.editImage({
								id,
								link: '/public/images/' + imageNames[vt],
								name: imageNames[vt],
								colorId: initFiles[i].colorId,
								productId: parseInt(addProductData.id as string),
							})
						}

						vt++
					}
				}
			}

			await dispatch(callApiEnd())
			await dispatch(modalClose())
			await dispatch(uploadFileReset())

			toast.success('Thêm sản phẩm thành công', {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				draggable: true,
				progress: undefined,
				pauseOnFocusLoss: false,
			})
		} catch (error) {
			console.log(error)
			dispatch(callApiEnd())
		}
	}

	return (
		<Box className='addOrEditProductModal'>
			<Modal
				open={open}
				onClose={() => dispatch(modalClose())}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				className='addOrEditProductModal__modal__wrapper'>
				<Box className='addOrEditProductModal__modal'>
					<Box className='addOrEditProductModal__modal__title'>
						<span>Thêm mới sản phẩm</span>
						<IconButton onClick={() => dispatch(modalClose())}>
							<i className='bx bx-message-square-x'></i>
						</IconButton>
					</Box>

					<Formik
						initialValues={initialValues}
						validationSchema={addOrEditProductSchema}
						onSubmit={onAddOrEditProductSubmit}>
						{({ isSubmitting }: { isSubmitting: boolean }) => (
							<Form className='addOrEditProductModal__modal__form'>
								<Box className='addOrEditProductModal__modal__form__grid'>
									<InputField
										required
										fullWidth
										label='Tên sản phẩm'
										name='name'
										value={nameProduct}
										onChange={handleNameProductChange}
										type='text'
									/>

									<InputField
										required
										fullWidth
										label='Slug'
										name='slug'
										value={slugProduct}
										onChange={handleSlugProductChange}
										type='text'
									/>

									<InputField
										required
										fullWidth
										label='Giá nhập'
										name='priceImport'
										type='text'
									/>

									<InputField
										required
										fullWidth
										label='Giá bán'
										name='price'
										type='text'
									/>

									<InputField
										fullWidth
										label='Giá giảm giá'
										name='priceDiscount'
										type='text'
									/>

									<InputField
										fullWidth
										label='Quà tặng'
										name='gift'
										type='text'
									/>

									<FormControl fullWidth>
										<InputLabel
											id='select-label'
											style={{
												backgroundColor: 'white',
												padding: '0px 3px',
											}}>
											Chọn loại sản phẩm
										</InputLabel>
										<Select labelId='select-label' value={categoryId}>
											<MenuItem value='' onClick={() => setCategoryId('')}>
												Chọn loại sản phẩm
											</MenuItem>
											{allCategory.map((category) => (
												<MenuItem
													key={`select-item-${category.id}`}
													value={category.id}
													onClick={() => setCategoryId(category.id)}>
													{category.name}
												</MenuItem>
											))}
										</Select>
									</FormControl>

									<SelectField
										label='Chọn thương hiệu'
										name='brandId'
										options={brands}
									/>

									<Box className='addOrEditProductModal__modal__form__uploadFile'>
										<Box className='addOrEditProductModal__modal__form__uploadFile__title'>
											Ảnh đại diện
										</Box>
										<UploadFile
											colorId={-1}
											size='medium'
											image={initFiles[0].images[0]}
											index={0}
										/>
									</Box>

									<Box>
										<Box className='addOrEditProductModal__modal__form__color__title'>
											Màu sắc
										</Box>

										<FormGroup className='addOrEditProductModal__modal__form__color'>
											{allColor.map((color) => (
												<FormControlLabel
													key={`color-checkbox-${color.id}`}
													control={
														<Checkbox
															name={color.name}
															value={color.id}
															onChange={handleColorChange}
														/>
													}
													label={color.name}
												/>
											))}
										</FormGroup>
									</Box>
								</Box>

								{colors.length > 0 && (
									<Box className='addOrEditProductModal__modal__form__tabs'>
										<Box className='addOrEditProductModal__modal__form__tabs__title'>
											Ảnh sản phẩm
										</Box>
										<TabContext value={tabActive}>
											<TabList
												onChange={handleTabChange}
												aria-label='lab API tabs example'
												centered>
												{colors.map((color, index) => (
													<Tab
														key={`tab-header-color-${color.id}`}
														label={color.name}
														value={index.toString()}
													/>
												))}
											</TabList>
											{colors.map((color, index) => (
												<TabPanel
													key={`tab-item-color-${color.id}`}
													value={index.toString()}
													className='addOrEditProductModal__modal__form__tabs__content'
													sx={
														tabActive !== index.toString()
															? { display: 'none !important' }
															: {}
													}>
													{initFiles[
														initFiles.findIndex(
															(file) => file.colorId === parseInt(color.id),
														)
													].images.map((image, idx) => (
														<UploadFile
															key={`image-upload-item-${idx + color.id}`}
															colorId={parseInt(color.id)}
															size='small'
															image={image}
															index={idx}
															disable={image.name === 'del'}
															multiple
														/>
													))}
												</TabPanel>
											))}
										</TabContext>
									</Box>
								)}

								<InputField
									label='Số lượng sản phẩm'
									name='quantity'
									type='number'
								/>

								<FormGroup className='addOrEditProductModal__modal__form__checkbox'>
									<CheckBoxField label='Trả góp 0%' name='installment' />
									<CheckBoxField label='Mới nhất' name='new' />
									<CheckBoxField label='Giảm giá' name='discount' />
								</FormGroup>

								{/* specifications */}
								<Box className='addOrEditProductModal__modal__form__speci__title'>
									Cấu hình sản phẩm
								</Box>
								<Box className='addOrEditProductModal__modal__form__speci'>
									{specis.map((speci, index) => (
										<Box
											key={`speci-item-${index}`}
											className='addOrEditProductModal__modal__form__speci__item'>
											{speci.name !== 'del' && (
												<>
													<TextField
														fullWidth
														label='Tên cấu hình'
														name={speci.id}
														value={speci.name}
														onChange={(e: any) =>
															handleSpeciChange(e, 'name', index)
														}
														type='text'
													/>

													<TextField
														fullWidth
														label='Nội dung'
														name={speci.id}
														value={speci.content}
														onChange={(e: any) =>
															handleSpeciChange(e, 'content', index)
														}
														type='text'
													/>

													<Box className='addOrEditProductModal__modal__form__speci__item__btn'>
														<Tooltip title='Thêm cấu hình'>
															<IconButton
																color='info'
																onClick={() => handleAddSpeci(index)}>
																<i className='bx bx-add-to-queue'></i>
															</IconButton>
														</Tooltip>

														{index > 0 && (
															<Tooltip title='Xóa cấu hình'>
																<IconButton
																	color='error'
																	onClick={() => handleDelSpeci(index)}>
																	<i className='bx bx-trash-alt'></i>
																</IconButton>
															</Tooltip>
														)}
													</Box>
												</>
											)}
										</Box>
									))}
								</Box>
								{/* specifications */}

								{/* description */}
								<Box>
									<Box className='addOrEditProductModal__modal__form__description__title'>
										Thông tin sản phẩm
									</Box>
									<Editor
										apiKey='1gm4ec14ey357xtl0d0kgqq7wrgep8xwarpr5pmjbihmkvx7'
										initialValue={''}
										init={{
											height: 500,
											menubar: true,
											plugins:
												'emoticons hr image link media lists charmap table advlist autolink print preview anchor searchreplace visualblocks insertdatetime media paste wordcount',
											toolbar:
												'undo redo | styleselect | forecolor | formatselect |fontselect | fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media| code | paste pastetext',
											automatic_uploads: true,
											file_picker_types: 'image media',
											file_picker_callback: handleUpload,
										}}
										onChange={(e: any) => setDescription(e.target.getContent())}
									/>
								</Box>
								{/* description */}

								<Box className='addOrEditProductModal__modal__form__btn__wrapper'>
									<LoadingButton
										loading={isSubmitting}
										type='submit'
										variant='contained'
										className='addOrEditProductModal__modal__form__btn'>
										Thêm
									</LoadingButton>
									<Button
										variant='contained'
										className='addOrEditProductModal__modal__form__btn addOrEditProductModal__modal__form__btn__close'
										onClick={() => dispatch(modalClose())}>
										Hủy
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
				</Box>
			</Modal>
		</Box>
	)
}

export default AddOrEditProductModal
