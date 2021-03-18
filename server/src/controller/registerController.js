const usersModel = require('../model/usersModel')
const bcrypt = require('bcrypt')

exports.renderRegister = (req, res) => {
	res.render('register')
}

exports.createUser = async (req, res) => {
	// validate user
	const {pseudo, mail, password, validate} = req.body
	if (password !== validate)
	{
		res.send('not ok')
		return 
	}
	
	//hash password
	const hash = bcrypt.hashSync(password, 10)
	
	//save user and check dup
	usersModel.User.create({
		pseudo : pseudo,
		mail : mail,
		password : hash
	})
	.then(obj => {
		//redirect after
		res.status(201).send('ok');
	})
	.catch(err => {
		console.log("Duplicate data")
		res.status(409).send('not ok')
	})

  
}
