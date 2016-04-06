var mongoose = require('mongoose'),
	process =  require('process'),
	bcrypt = require('bcrypt-nodejs'),
	db = require('../db'),
	UserSchema = require('../models/schemas/user');

if (process.argv.length <= 2)
    process.exit(-1);

var username = process.argv[2];
var password = process.argv[3];

bcrypt.genSalt(10, function(err, salt) {
	bcrypt.hash(password, salt, null, function(err, hash) {

		var User = mongoose.model('User', UserSchema);
		var user = new User({username: username, password: hash});

		user.save(function (err) {
			if (err) return err;
			console.log("New user added to database");
		});
	});
});
