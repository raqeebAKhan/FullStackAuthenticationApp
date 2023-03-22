const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		Firstname: { type: String, required: true },
		Lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phone: { type: String, required: true },
		password: { type: String, required: true },
	
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model