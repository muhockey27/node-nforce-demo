// 'use strict'

var pg = require('pg');
pg.defaults.ssl = true;

var connectionString = 'postgres://tchbdxdjikabui:sa1lUzMhgRmbYPnL5lYX0KMR3r@ec2-50-17-214-132.compute-1.amazonaws.com:5432/d6dtfs40gmilpn';
var postgres_db = pg.connect(connectionString, function(err, client) {
	//Failed Connection
	if(err) {
		console.log('Connection error result:' + err);
	}

	//Connection Successful
	console.log('Connected to postgres! Getting schemas...');

	//Configure client
	client
		.query('SELECT table_schema, table_name FROM information_schema.tables')
		.on('row', function(row) {
			console.log(JSON.stringify(row));
		});
});


module.exports = postgres_db;