const Sequelize = require("sequelize")
const UserModel = require('./userModel')
const MatchModel = require('./matchModel')

sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'postgres',
	logging: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
})

const User = UserModel(sequelize, Sequelize)
const Match = MatchModel(sequelize, Sequelize)

User.hasMany(Match)


module.exports = {sequelize, User, Match}
