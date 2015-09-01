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
		Teacher.find({
				"_id": req.params.teacher_id
			})
			.exec(function (err, result) {
				if (err) return res.status(500).send(err);
				else res.send(result);
			});
	},
	findTeacherById: function (req, res) {
		var teacherName = req.params.teacher_name;
		Teacher.find({
				"name": teacherName
			}).limit(1)
			.exec(function (err, result) {
				console.log(result);
				if (result.length === 0) {
					var newTeacher = new Teacher({
						"name": teacherName
					});
					newTeacher.save(function (err, result) {
						if (err) return res.status(500).send(err);
						else res.send(result);
					});
				} else if (err) {
					return res.status(500).send(err);
				} else {
					console.log("sending res: ", result);
					res.send(result[0]);
				}
			})
	}
}
