module.exports = (sequelize, Sequelize) => {
	return sequelize.define('users', {
		pseudo: {
		  type: Sequelize.STRING,
		  unique: true
		},
		mail: {
			type: Sequelize.STRING,
			unique: true
		},
		password: {
		  type: Sequelize.STRING
		},
		role: {
		  type: Sequelize.STRING,
		  defaultValue: 'user'
		}
	})
}
