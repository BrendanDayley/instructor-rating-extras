var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
	universityId: {
		type: Schema.Types.ObjectId,
		ref: 'University'
	},
	teacherId: {
		type: Schema.Types.ObjectId,
		ref: 'Teacher'
	},
	classNumber: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Class', classSchema);
