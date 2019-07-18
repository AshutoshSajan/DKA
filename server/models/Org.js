var mongoose = require ('mongoose');
var schema = mongoose.Schema;

var organisationSchema = new Schema({
	details: {
		type: Object;
		default: {}
	}
}, {timestamp: true })

var Org = mongoose.model("Org", organisationSchema);

module.exports = Org;