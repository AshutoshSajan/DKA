var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registerSchema = new Schema({
	firstName:{
		type: String,
		required: true
	},
	lastName:{
		type: String,
		required: true
	},
	mothersName:{
		type: String,
		required: true
	},
	address:{
		type: String,
		required: true
	},
	currentAddress:{
		type: String,
		required: true
	},
	phone:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	dob:{
		type: String,
		required: true
	},
	weight:{
		type: String,
		required: true
	},
	profession:{
		type: String,
		required: true
	},
	info:{
		type: String,
		required: true
	}

}, { timestamps: true });

var Register = mongoose.model("Register", registerSchema);
module.exports = Register;