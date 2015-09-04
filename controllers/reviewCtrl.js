var Review = require('../models/reviews');

module.exports = {
	create: function (req, res) {
		var newReview = new Review(req.body);
		newReview.save(function (err, result) {
			if (err) return res.status(418).send(err);
			else res.send(result);
		});
	},
	read: function (req, res) {
		Review.find(req.params)
			.exec(function (err, result) {
				if (err) return res.status(418).send(err);
				else res.send(result);
			});
	},
};
