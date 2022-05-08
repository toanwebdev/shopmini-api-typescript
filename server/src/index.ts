require('dotenv').config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { createConnection } from 'typeorm'
import { Brand } from './entities/Brand'
import { Category } from './entities/Category'
import { CategoryBrand } from './entities/CategoryBrand'
import { Color } from './entities/Color'
import { Image } from './entities/Image'
import { Product } from './entities/Product'
import { ProductColor } from './entities/ProductColor'
import { Specifications } from './entities/Specifications'
import { User } from './entities/User'
import authRoute from './routes/auth'
import userRoute from './routes/user'
import colorRoute from './routes/color'
import categoryRoute from './routes/category'
import categoryBrandRoute from './routes/categoryBrand'
import uploadRoute from './routes/upload'
import productRoute from './routes/product'
import specificationsRoute from './routes/specifications'
import productColorRoute from './routes/productColor'
import imageRoute from './routes/image'

const main = async () => {
	await createConnection({
		type: 'mysql',
		database: 'shopmini',
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		logging: true,
		synchronize: true,
		entities: [
			User,
			Product,
			Color,
			Image,
			ProductColor,
			Specifications,
			Category,
			Brand,
			CategoryBrand,
		],
	})

	const app = express()

	app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
	app.use(cookieParser())
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	// routes
	app.use('/v1/api/auth', authRoute)
	app.use('/v1/api/user', userRoute)
	app.use('/v1/api/color', colorRoute)
	app.use('/v1/api/category', categoryRoute)
	app.use('/v1/api/categoryBrand', categoryBrandRoute)
	app.use('/v1/api/upload-file', uploadRoute)
	app.use('/v1/api/product', productRoute)
	app.use('/v1/api/specifications', specificationsRoute)
	app.use('/v1/api/product-color', productColorRoute)
	app.use('/v1/api/image', imageRoute)

	const PORT = process.env.PORT || 4000

	app.listen(PORT, () => {
		console.log(`SERVER STARTING ON http://localhost:${PORT}`)
	})
}

main().catch((error) =>
	console.log('ERROR STARTING SERVER: ', console.error(error)),
)
