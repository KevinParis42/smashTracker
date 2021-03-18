const jwt = require('jsonwebtoken')
const matchModel = require('../model/matchModel')


exports.createMatch = async (req, res) => {
	try {
		const {opponent, character, opponentCharacter, winner, stockDiff} = req.body
		await matchModel.Match.create({
			userId: req.user.id,
			opponent: opponent,
			character: character,
			opponentCharacter: opponentCharacter,
			winner : winner,
			stockDiff : stockDiff
		})
		res.status(201)
		
	} catch (error) {
		console.log(error)
		res.status(409).send('not ok')
	}
}

exports.getMatchs = async (req, res) => {
	try {
		const matchs = await matchModel.Match.findAll({raw: true, where: {userId: req.user.id}})
		res.status(200).json(matchs)
	} catch (error) {
		console.error(error)
		res.status(400)
	}
}
