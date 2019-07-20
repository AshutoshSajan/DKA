var express = require('express');
var router = express.Router();
var jwtAuth = require('../../utils/jwtAuth');
var orgController = require('../../controllers/orgController');
console.log(orgController.registerUser, jwtAuth.verifyToken, "");

router.post('/register', jwtAuth.verifyToken, orgController.registerUser);
router.get('/get-all-registrations', jwtAuth.verifyToken, jwtAuth.isAdmin, orgController.getAllRegistrations);
router.get('/get-one-registration', jwtAuth.verifyToken, jwtAuth.isAdmin,orgController.getOneRegistration);
router.delete('/delete-registration', jwtAuth.verifyToken, jwtAuth.isAdmin, orgController.deleteRegistration);

module.exports = router;