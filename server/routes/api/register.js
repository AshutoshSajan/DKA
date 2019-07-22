var express = require('express');
var router = express.Router();
var jwtAuth = require('../../utils/jwtAuth');
var registerController = require('../../controllers/registerController');
// console.log(orgController.registerUser, jwtAuth.verifyToken, "");

router.post('/', jwtAuth.verifyToken, registerController.registerUser);
router.get('/get-all-registrations', jwtAuth.verifyToken, jwtAuth.isAdmin, registerController.getAllRegistrations);
router.get('/get-one-registration', jwtAuth.verifyToken, jwtAuth.isAdmin,registerController.getOneRegistration);
router.delete('/delete-registration', jwtAuth.verifyToken, jwtAuth.isAdmin, registerController.deleteRegistration);

module.exports = router;