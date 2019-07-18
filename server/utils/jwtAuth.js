var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

module.exports.varifyToken = function(req,res,next){
	var token = req.headers.Authorization || req.headers.authorization || "";
	if(token){
		jwt.varify(token, process.env.SIGN, (err, decoded) => {
			if (err) {
				console.log(err, "token validation err")
				res.status(500).json({ success: false, message: "Invalid token" })
			} else if(decoded){
				console.log(decoded, "valid token");
				req.user = decoded;
				next();
			}
		})
	}
} 