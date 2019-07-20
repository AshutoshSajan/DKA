var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require ('../models/User');

exports.verifyToken = function(req, res, next){
	var token = req.headers.Authorization || req.headers.authorization || "";
	console.log(token, "check1");
	if(!token) {
    return res.status(401).send({ message: 'Please authenticate... '});
  } else if(token){
			jwt.verify(token, process.env.SIGN, function(err, decoded){
			if(err) {
				return res.status(500).json({ success: false, message: "Token validation error" });
			} else if(decoded && decoded.id){
				req.user = decoded;
				return next();
			}
		})
	}
} 

exports.isAdmin = (req,res,next) => {
	console.log(req.user, "isAdmin check");
	User.findOne({ _id: req.user.id}, (err, user) => {
		if(err){
			return res.status(500).send('server error')
		} else if(user && user.isAdmin){
			console.log(user.isAdmin, "yup admin found");
			next()
		}
	})
}