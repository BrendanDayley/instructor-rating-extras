var University = require('../models/universities');

module.exports = {
	create: function (req, res) {
		var newUniversity = new University(req.body);
		newUniversity.save(function (err, result) {
			console.log('hi there: ', err);
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	read: function (req, res) {
		University.find(req.query)
			.exec(function (err, result) {
				if (err) return res.status(418).send(err);
				else {
					res.send(result);
				}
			});
	},
};
