	var mongoose = require('mongoose')
	var Employee = function (){

		var addressSchema = mongoose.Schema({
			street:{
				type: String,
				required: true
			},
			state:{
				type: String
			},
			city:{
				type: String
			},
			pin:{
				type: String
			},
		},{ _id : false });

		var empSchema = mongoose.Schema({
			emp_name:{
				type: String,
				required: true
			},
			emp_email:{
				type: String,
				required: true
			},
			emp_code:{
				type: String,
				required: true
			},
			emp_designation:{
				type: String,
				required: true
			},
			emp_section:{
				type: String,
			},
			emp_img:{
				type: String
			},
			adress: [addressSchema], 
			create_date:{
				type: Date,
				default: Date.now
			}
		});
		this.Employees = mongoose.model('employee', empSchema);
		return this;
	}
	// Get Books 
	Employee.prototype.getEmployees = function(callback, limit) {
		this.Employees.find(callback).limit(limit);
	}

	Employee.prototype.addEmployee = function(emp, callback){
		console.log(emp);
		this.Employees.create(emp, callback);
	}

	Employee.prototype.getEmployeeById = function (id, callback) {
		var query = {userid: mongoose.Types.ObjectId(id)};
		console.log(query);
		this.Employees.find(query, callback).limit();
	}

	module.exports = Employee;
