var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var newEmployee = require('../models/employee');

var newInstance = new newEmployee();
router.get('/employee/:_id', (req, res) => {
	var id = req.params._id;
    newInstance.getEmployeeById(id, (err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

router.get('/employee', (req, res) => {
    newInstance.getEmployees((err, employee) => {
		if(err){
			throw err;
		}
		res.json(employee);
	});
});

router.post('/employee', (req, res, next) => {
	var employee = req.body;
	console.log(employee);
    newInstance.addEmployee(employee, function(err, employee){
		if(err){
			res.status(500).semd('required field is missing');
		}
		res.json(employee);
	});
});

module.exports = router;