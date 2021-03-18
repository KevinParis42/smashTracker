const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer();
const cookieParser = require('cookie-parser')
const router = require('./router')
const dbModel = require('./model/dbModel')

//middleware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(upload.array())
app.use(cookieParser())


//router
app.use('/', router)

dbModel.sequelize.sync()

app.listen(process.env.PORT, () => {
	console.log(`app launched on port ${process.env.PORT}`)
})
