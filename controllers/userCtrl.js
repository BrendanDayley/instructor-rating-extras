var User = require('../models/user');

module.exports = {
	create: function(req, res) {
		var newUser = new User(req.body);
		newUser.save(function (err, result) {
			if (err) return res.status(418).send(err);
			else res.send(result);
		});
	},
	read: function(req, res) {
		User.find(req)
			.exec(function (err, result) {
				if(err) return res.status(418).send(err);
				else res.send(result);
			});
	}
}