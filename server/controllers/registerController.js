var Register = require ('../models/Register');

module.exports = {
	registerUser: (req,res) => {
		console.log('Register form data.......', req.body);
		Register.findOne ({ email : req.body.email }, (err, user) => {
			if(err){
				return res.status(500).json({ success: false, error: err, massage: "server side error" });
			} else if(user){
				res.status(302).json({ success: false, massage: "you have been already registerded" });
			} else {
				Register.create(req.body, { new: true }, (err, registration) => {
					if (err) {
						return res.status(500).send("server error")
					} else if(registration){
						return res.status(200).json({ success: true, registration })
					}
				})
			}
		})	
	},
	getAllRegistrations: (req,res) => {

	},
	getOneRegistration: (req,res) => {

	},
	deleteRegistration: (req,res) => {

	}

}
