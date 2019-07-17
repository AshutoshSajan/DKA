var express = require ('express');
var router = express.Router();

var userController = require('../../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/verify', userController.verifyToken);
router.put('/update', userController.updateUser);
router.delete('/delete', userController.deleteUser);

module.exports = router;