var Teacher = require('../models/teacher');

module.exports = {
	create: function (req, res) {
		var newTeacher = new Teacher(req.body);
		newTeacher.save(function (err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	read: function (req, res) {
		Teacher.find(req.params)
			.exec(function (err, result) {
				if (err) return res.status(500).send(err);
				else res.send(result);
			});
	},
	read2: function (req, res) {
		Teacher.find({ "_id": req.params.teacher_id })
			.exec(function (err, result) {
				if (err) return res.status(500).send(err);
				else res.send(result);
			});
	}
}
