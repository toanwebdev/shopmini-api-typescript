require('dotenv').config()
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import authRoute from './routes/auth'
import userRoute from './routes/user'

const main = async () => {
	await createConnection({
		type: 'mysql',
		database: 'shopmini',
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		logging: true,
		synchronize: true,
		entities: [User],
	})

	const app = express()

	app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
	app.use(cookieParser())
	app.use(express.json())

	// routes
	app.use('/v1/api/auth', authRoute)
	app.use('/v1/api/user', userRoute)

	const PORT = process.env.PORT || 4000

	app.listen(PORT, () => {
		console.log(`SERVER STARTING ON http://localhost:${PORT}`)
	})
}

main().catch((error) =>
	console.log('ERROR STARTING SERVER: ', console.error(error)),
)
