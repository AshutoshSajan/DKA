var express = require('express');
var router = express.Router();
var userRouter = require('./users');
var orgRouter = require('./register');

// var middleWare = (req,res,next) => {
// 	console.log(req.body, "mid ware");
// 	next();
// }

/* GET home page. */
router.use('/users', userRouter);
router.use('/register', orgRouter);

router.get('/*', function (req, res, next) {
  res.json({success: true, message: 'Welcome to Node APIs'});
});

module.exports = router;
