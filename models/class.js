var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var classSchema = new Schema({
	university: {
		type: Schema.Types.ObjectId,
		ref: 'University'
	},
	teacher: {
		type: Schema.Types.ObjectId,
		ref: 'Teacher'
	},
	teacherName: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Classes', classSchema);
