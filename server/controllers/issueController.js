var Issue = require ('../models/Issue');
var User = require ('../models/User');

module.exports = {

	add_Issue: (req,res) => {
		console.log('Issue form data.......', req.body);
		Issue.create(req.body, { new: true }, (err, issue) => {
			if (err) {
				return res.status(500).send("server error")
			} else if(issue){
				User.findOneAndUpdate({ email: req.body.email },{ $push: { issue : issue._id }},{ new: true },(err,user) => {
					if(err){
						res.status(500).send("server error");
					} else if(user) {
						console.log(user, "inside issecontroller");
						return res.status(200).json({ success: true, issue, massage: "Thank you for your feedback we will fix it as soon as possible" });
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
