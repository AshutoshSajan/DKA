var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var issueSchema = new Schema({
	email:{
		type: String,
		default: ""
	},
	severity:{
		type: String,
		default: ""
	},
	priority:{
		type: String,
		default: ""
	},
	summary:{
		type: String,
		default: ""
	},
	description:{
		type: String,
		default: ""
	},
	user:{
		type: Schema.Types.ObjectId,
		default: ""
	}
}, { timestamps: true })

var Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;