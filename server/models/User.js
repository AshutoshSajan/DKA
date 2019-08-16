var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

var userSchema = new Schema(
	{
		firstName: {
			type: String
		},
		lastName: {
			type: String
		},
		phone: {
			type: String
		},
		userName: {
			type: String,
			unique: true
		},
		password: {
			type: String,
			required: true,
			min: 8,
			max: 20
		},
		email: {
			type: String,
			unique: true,
			reqired: true
		},
		dob: {
			type: Date
		},
		rank: {
			type: String
		},
		belt: {
			type: String
		},
		photo: {
			type: String
		},
		isVerified: {
			type: Boolean,
			default: false
		},
		token: {
			type: String
		},
		isStudent: {
			type: Boolean,
			default: false
		},
		isSenior: {
			type: Boolean,
			default: false
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		dojo: {
			type: String
		},
		issues: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Issue'
			}
		]
	},
	{ timestamps: true }
);

userSchema.pre('save', function(next) {
	if (this.password && this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, salt);
	}

	if (this.email === process.env.EMAIL || this.email === process.env.ADMIN) {
		this.isAdmin = true;
	}
	next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;
