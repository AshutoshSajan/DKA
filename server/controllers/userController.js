var User = require ('../models/User');


module.exports = {
	getAllUsers: (req,res) => {
		User.find({}, (err, users) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, users });
		})
	},

	getUser: (req, res) => {
		User.findOne({ _id: req.params.id }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	login : (req, res) => {
		console.log(req.body, "login data");
		User.findOne({ email: req.body.email }, (err,user) => {
			if(err) return res.status(500).json({ success: false, error: err })
			if(user){
				res.status(200).json({ success: true, user })
			}
		})
	},

	register: (req, res) => {
		console.log(req.body, "inside register user");
		User.create(req.body, (err,user) => {
			if(err) return res.status(500).json({ success: false, error: err })
			if(user){
				res.status(200).json({ success: true, massage: "user registerd succesfully" })
			}
		})
	},

	verifyToken : (req,res) => {
		User.findOne({ _id: req.user.id }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	updateUser : (req,res) => {
		User.findOneAndUpdate({ _id: req.user.id }, req.body, { new: true }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	},

	deleteUser : (req,res) => {
		User.findOneAndDelete({ _id: req.user.id }, (err,user) => {
			if(err) res.status(500).send(err);
			res.status(200).json({ success: true, user });
		})
	}
}