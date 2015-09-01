var Class = require('../models/class');

module.exports = {
	create: function (req, res) {
		var newClass = new Class(req.body);
		newClass.save(function (err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	read: function (req, res) {
		Class.find(req.params)
			.exec(function (err, result) {
				console.log(result)
				if (err) return res.status(418).send(err);
				else res.send(result);
			})
	}
}
