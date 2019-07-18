var express = require ('express');
var router = express.Router();
var jwtAuth = require('../../utils/jwtAuth');
var userController = require('../../controllers/userController');

router.get('/', jwtAuth.verifyToken, userController.getAllUsers);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/me', jwtAuth.verifyToken, userController.verifyToken);
router.put('/update', jwtAuth.verifyToken, userController.updateUser);
router.delete('/delete', jwtAuth.verifyToken, userController.deleteUser);
router.get('/students/', jwtAuth.verifyToken, userController.getAllStudents);
router.get('/instructors/', jwtAuth.verifyToken, userController.getInstructors);
router.get('/:id', jwtAuth.verifyToken, userController.getUser);

module.exports = router;