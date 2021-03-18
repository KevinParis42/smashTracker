const characterModel = require('../model/characterModel')

exports.getCharacters = async(req, res) => {
	try {
		const characters = await characterModel.Characters.findAll({raw: true})
		res.status(200).json(characters)
	} catch (error) {
		console.error(error)
	}
}

exports.getSingleChar = async (req, res) => {
	try {
		const characters = await characterModel.Characters.findAll({raw: true, where: {name : req.params.name}})
		res.status(200).json(characters)
	} catch (error) {
		console.error(error)
	}	
}
