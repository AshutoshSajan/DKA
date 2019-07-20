var Org = require ('../models/Org');

module.exports = {
	registerUser: (req,res) => {
		Org.create(req.body, (err, registration) => {
			if (err) {
				return res.status(500).send("server error")
			} else if(registration){
				return res.status(200).json({ success: false, registration })
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
