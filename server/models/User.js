var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

var userSchema = new Schema({
	firstName:{
		type: String,
		default: ""
	},
	lastName:{
		type: String,
		default: ""
	},
	phone:{
		type: String,
		default: ""
	},
	userName: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: "",
		min: 8,
		max: 20
	},
	email: {
		type: String,
		unique: true,
		reqired: true
	},
	dob: {
		type: Date,
		default: ""
	},
	rank: {
		type: String,
		default: ""
	},
	belt:{
		type: String,
		default: ""
	},
	photo: {
		type: String,
		default: ""
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	token: {
		type: String,
		default: ""
	},
	isStudent: {
		type: Boolean,
		default: false,
	},
	isSenior: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	dojo: {
		type: String,
		default: ""
	}
}, { timestamps: true });

userSchema.pre('save', function (next) {
	if(this.password && this.isModified('password')){
		this.password = bcrypt.hashSync(this.password, salt);
	}

	if(this.email === process.env.EMAIL || this.email === process.env.ADMIN){
		this.isAdmin = true;
	}
	next();
})

var User = mongoose.model('User', userSchema);

module.exports = User;