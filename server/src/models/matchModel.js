
module.exports = (sequelize, Sequelize) => {
	return sequelize.define('matchs', {
		userId : {
			type: Sequelize.INTEGER,
			model: 'users',
			key: 'id'
		},
		opponent: {
		  type: Sequelize.STRING
		},
		character: {
			type: Sequelize.STRING
		},
		opponentCharacter: {
		  type: Sequelize.STRING
		},
		winner: {
		  type: Sequelize.INTEGER,
		  default: 1
		},
		stockDiff : {
			type: Sequelize.INTEGER,
			default: 1
		  }
	  })
}
