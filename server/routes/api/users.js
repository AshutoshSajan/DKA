var express = require('express');
var router = express.Router();
var jwtAuth = require('../../utils/jwtAuth');
var userController = require('../../controllers/userController');

router.get('/', jwtAuth.verifyToken, userController.getAllUsers);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/verify-account/:token/:email', userController.verifyAccount);
router.get('/students', jwtAuth.verifyToken, userController.getAllStudents);
router.put('/update/:id', jwtAuth.verifyToken, userController.updateUser);
router.delete('/delete/:id', jwtAuth.verifyToken, userController.deleteUser);
router.get('/instructors', jwtAuth.verifyToken, userController.getInstructors);
router.get('/profile/:id', jwtAuth.verifyToken, userController.getUser);
router.get('/me', jwtAuth.verifyToken, userController.verifyToken);

module.exports = router;
