var mongoose = require('mongoose');
var Schema = mongoose.schema();
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

var userSchema = new Schema({
	username: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		default: ""
	},
	age: {
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
	verified: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
}, { timeStamp: true });

userSchema.pre('save', function (next) {
	if(this.password && this.isModified('password')){
		this.password = bcrypt.hashSync(this.password, salt);
	}

	if(this.email === process.env.email || this.email === process.env.admin){
		this.isAdmin = true;
	}
	next();
})

var User = mongoose.model('User', 'userSchema');

module.exports = User;