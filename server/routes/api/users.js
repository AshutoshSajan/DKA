var express = require ('express');
var router = express.Router();
var jwtAuth = require('../../utils/jwtAuth');
var userController = require('../../controllers/userController');

router.get('/', jwtAuth.varifyToken, userController.getAllUsers);
router.get('/:id', jwtAuth.varifyToken, userController.getUser);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/me', jwtAuth.varifyToken, userController.verifyToken);
router.put('/update', jwtAuth.varifyToken, userController.updateUser);
router.delete('/delete', jwtAuth.varifyToken, userController.deleteUser);

module.exports = router;