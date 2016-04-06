var mongoose = require('mongoose'),
	process =  require('process'),
	bcrypt = require('bcrypt-nodejs'),
	db = require('../db'),
	Client = require('../models/client');

if (process.argv.length <= 2)
    process.exit(-1);

var client = new Client({
		name: process.argv[2],
	 	id: process.argv[3],
	 	secret: process.argv[4]
	});

client.save(function (err) {
	if (err) return err;
	console.log("New client added to database");
});
