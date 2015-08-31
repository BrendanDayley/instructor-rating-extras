var Class = require('../models/class');

module.exports = {
	create: function(req, res){},
	read: function(req, res) {
		Class.find(req.query)
		.exec(function(err, result){
			if (err) return res.status(418).send(err);
			else res.send(result);
		})
	}
}