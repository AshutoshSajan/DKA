var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');
// const salt = bcrypt.genSaltSync(10);

var userSchema = new Schema({
	username: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		unique: true,
		reqired: true
	},
	dob: {
		type: String,
		default: ""
	},
	rank: {
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
}, { timeStamp: true });

userSchema.pre('save', function (next) {
	// if(this.password && this.isModified('password')){
	// 	this.password = bcrypt.hashSync(this.password, salt);
	// }

	if(this.email === process.env.MAIL || this.email === process.env.ADMIN){
		this.isAdmin = true;
	}
	next();
})

var User = mongoose.model('User', userSchema);

module.exports = User;