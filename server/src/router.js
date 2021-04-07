const express = require('express')
const router = express.Router()
const auth = require('./middleware/auth')

const loginController = require('./controllers/loginController')
const matchController = require('./controllers/matchController')

router.post('/login', (req, res) => {
	loginController.logUser(req, res)
})

router.post('/match', auth, (req, res) => {
	matchController.createMatch(req, res)
})

router.get('/match', auth, (req, res) => {
	matchController.getMatchs(req, res)
})

router.get('/', auth, (req, res) => {
	res.send('COUCOU CA MARCHE')
})

module.exports = router
