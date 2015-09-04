/* global process */

'use strict';

//external dependancies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//local dependancies
var universityCtrl = require('./controllers/universityCtrl');
var teacherCtrl = require('./controllers/teacherCtrl');
var userCtrl = require('./controllers/userCtrl');
var reviewCtrl = require('./controllers/reviewCtrl');
var classCtrl = require('./controllers/classCtrl')

// CONTROLLERS

// EXPRESS
var app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

//  ENDPOINTS ======================================================

//	UNIVERSITIES
app.get('/api/universities', universityCtrl.read);
app.post('/api/universities', universityCtrl.create);

//	TEACHERS
app.get('/api/teachers/:university', teacherCtrl.read);
app.post('/api/teachers', teacherCtrl.create);
app.get('/api/teachers/teacher_name/:teacher_name', teacherCtrl.findTeacherByName);

//	USERS
app.get('/api/users', userCtrl.read);
app.post('/api/users', userCtrl.create);

//	REVIEWS
app.get('/api/reviews/:classId', reviewCtrl.read);
app.post('/api/reviews', reviewCtrl.create);


app.get('/api/classes/:university', classCtrl.read);
app.get('/api/classes/class/id/:classId', classCtrl.findById);
app.post('/api/classes', classCtrl.create);

//===================================================================

//CONNECTIONS
var port = process.argv[2] || 8080;
var mongoUri = 'mongodb://localhost:27017/instructorRating';

mongoose.set('debug', true);
mongoose.connect(mongoUri);

mongoose.connection.once('open', function () {
	console.log('hacking in at: ', mongoUri);
});

app.listen(port, function () {
	console.log('the nsa is watching you through port: ', port);
});

process.on('uncaughtException', function (err) {
	console.log(err);
});
