var Issue = require ('../models/Issue');
var User = require ('../models/User');

module.exports = {

	add_Issue: (req,res) => {
		console.log('Issue form data.......', req.body);
		Issue.create(req.body, { new: true }, (err, issue) => {
			if (err) {
				return res.status(500).send("server error")
			} else if(issue){
				console.log(issue, "check1");
				User.findOneAndUpdate({ email: req.body.email },{ $push: { issues : issue._id }},{ new: true },(err,user) => {
					if(err){
						console.log("check2")
						res.status(500).send("server error");
					} else if (!user){
						return res.status(401).json({ success: false, error: "You are not authorized lo report an issue"});
					} else if(user) {
						console.log(user, "inside issecontroller");
						return res.status(200).json({ success: true, massage: "Thank you for your feedback we will fix it as soon as possible" });
					}
				})
			}
		})
	},

	get_All_Issues: (req,res) => {

	},

	get_Issue: (req,res) => {

	},

	delete_Issue: (req,res) => {

	}

}
