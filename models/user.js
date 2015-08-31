var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	login: {
		type: String,
		require: true,
		unique: true,
	},
	password: {
		type: String,
		require: true,
	},
	Teachers: {
		type: Array,
		require: false,
	}
});

module.exports = mongoose.model ('User', userSchema);