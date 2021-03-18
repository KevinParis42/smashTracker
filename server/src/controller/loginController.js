const usersModel = require('../model/usersModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.logUser = async(req, res) => {
	const {mail, password} = req.body
	try {
		//check user exist
		const user = await usersModel.User.findOne({ where: {mail: mail} })
		if (user === null)
			throw 'User does not exist'
		//check password
		if (bcrypt.compareSync(password, user.password) == false)
			throw 'Invalid password'
		//create jwt
		const token = jwt.sign(
			{
				pseudo: user.pseudo,
				mail: user.mail,
				role: user.role,
				id: user.id
			},
			process.env.JWT_SECRET,
			{expiresIn : '1h', algorithm: 'HS512'}
		)
		res.cookie('token', token).status(200).send('ok')
		return
	} catch (error) {
		console.error(error)
		res.status(401).send('error on login')
		return
	}
}
