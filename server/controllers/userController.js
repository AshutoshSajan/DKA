var User = require ('../models/User');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
	getAllUsers: (req,res) => {
		console.log("getalluser");

		User.find({}, (err, users) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, users });
		})
	},

	getUser: (req, res) => {
		console.log(req.params.id, "getuser");
		User.findOne({ _id: req.params.id }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	login : (req, res) => {
		console.log(req.body, "login data check1");
		User.findOne({ email: req.body.email }, (err,user) => {
			console.log(req.body, "login data check2");

			if(err) return res.status(500).json({ success: false, error: err })
			if(user){
				console.log(req.body, "login data check3");

				var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
				console.log(isValidPassword, "isValidPassword..");
				var token = jwt.sign({ id: user._id }, process.env.SIGN);
				if(!isValidPassword){
					console.log(req.body, "login data check4");

					res.status(401).json({ success: false, massage: "Invalid pasword" })
				} else if(isValidPassword){
					res.status(200).json({ success: true, user, token })
				}
			} else {
				res.status(400).json({ success: false, error: "user does not found"})
			}
		})
	},

	register: (req, res) => {
		console.log(req.body, "inside register user");

		User.findOne({ email: req.body.email }, (err, user) => {
			if(err) return res.status(500).json({ success: false, error: err, message: "server side error" });
			if(user){
				console.log("user already exist");
				res.status(302).json({ success: false, message: "User already exist" })
			} if(!user) {
				User.create(req.body, (err,user) => {
					if(err) return res.status(500).json({ success: false, error: err, message: "Server side error" })
					if(user){
						res.status(201).json({ success: true, massage: "user registerd succesfully" })
					}
				})
			}
		})
	},

	verifyToken: (req,res) => {
		console.log(req.user, "insede me");
		User.findOne({ _id: req.user.id }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	updateUser : (req,res) => {
		console.log(req.params.id, req.user,"inside server updateUser...");
		User.findOneAndUpdate({ _id: req.user.id }, req.body, { new: true }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	deleteUser : (req,res) => {
		console.log(req.params.id, req.user,"inside server updateUser...");
		User.findOneAndDelete({ _id: req.user.id }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	getAllStudents: (req,res) => {
		console.log("inside all students");

		User.find({}, (err, users) => {
			if(err) {
				return res.status(500).json({ success: false, error: err, massage: "Server error" });
			}
			if(users){
				return res.status(200).json({ success: true, users });
			}
		})
	},
	
	getInstructors: (req,res) => {
		console.log("inside all students");

		User.find({}, (err, users) => {
			if(err) {
				return res.status(500).json({ success: false, error: err, massage: "Server error" });
			}
			if(users){
				return res.status(200).json({ success: true, users });
			}
		})
	}
}