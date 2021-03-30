const jwt = require('jsonwebtoken')
const {Match, sequelize} = require('../models/database')
const { QueryTypes } = require('sequelize')


exports.createMatch = async (req, res) => {
	try {
		const {opponent, character, opponentCharacter, winner, stockDiff} = req.body
		await Match.create({
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
		const sql = 'SELECT \
		m.opponent,\
		m.winner,\
		m.character,\
		c1.url AS url1,\
		m."opponentCharacter",\
		c2.url AS url2,\
		m."stockDiff",\
		m."createdAt"\
	FROM\
		matchs AS m\
		LEFT JOIN characters C1 ON c1.name = m."character"\
		LEFT JOIN characters c2 ON c2.name = m."opponentCharacter";'

		const matchs = await sequelize.query(sql, { type: QueryTypes.SELECT });
		console.log(matchs)
		res.status(200).json(matchs)
	} catch (error) {
		console.error(error)
		res.status(400)
	}
}
