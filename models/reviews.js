var mongoose = require('mongoose');
var Schema = mongoose.Schema

var reviewSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	rating: {
		type: Number,
		required: true
	},
	comment: {
		type: String,
		required: false
	},
	classId: {
		type: Schema.Types.ObjectId,
		ref: 'Classes',
		required: true
	},
});

module.exports = mongoose.model('Review', reviewSchema);
