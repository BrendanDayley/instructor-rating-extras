var mongoose = require('mongoose');

var universitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		index: true,
		lowercase: true,
		unique: true,
	}
})

module.exports = mongoose.model('University', universitySchema);
