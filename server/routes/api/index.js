var express = require('express');
var router = express.Router();
var userRouter = require('./users');

/* GET home page. */
router.use('/users', userRouter);

router.get('/*', function (req, res, next) {
  res.json({success: true, message: 'Welcome to Node APIs'});
});


module.exports = router;
