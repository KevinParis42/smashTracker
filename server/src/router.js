const express = require('express')
const router = express.Router()
const auth = require('./middleware/auth')
const loginController = require('./controller/loginController')
const registerController = require('./controller/registerController')
const matchController = require('./controller/matchController')
const characterController = require('./controller/characterController')


router.post('/login', (req, res) => {
	loginController.logUser(req, res)
})

router.post('/register', (req, res) => {
	registerController.createUser(req, res)
})

router.post('/match', auth, (req, res) => {
	matchController.createMatch(req, res)
})

router.get('/match', auth, (req, res) => {
	matchController.getMatchs(req, res)
})

router.get('/characters', (req, res) => {
	characterController.getCharacters(req, res)
})

router.get('/characters/:name', (req, res) => {
	characterController.getSingleChar(req, res)
})

module.exports = router
