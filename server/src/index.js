const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const router = require('./router')
const db = require('./models/database')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const upload = multer()

//middlewares
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(upload.array())
app.use(cookieParser())

//router
app.use('/', router)

const startServer = () => {
	const server = app.listen(process.env.PORT, () => {
		console.log(`app launched on port ${process.env.PORT}`)
	})
}

(async () => {
	await db.sequelize.sync()
	console.log('db sync')
	startServer()
})()

