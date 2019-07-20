var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var organisationSchema = new Schema({
	details: {
		type: Object,
		default: {}
	}
}, { timestamps: true })

var Org = mongoose.model("Org", organisationSchema);

module.exports = Org;