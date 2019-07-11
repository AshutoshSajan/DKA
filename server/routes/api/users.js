var express = require ('express');
var router = express.Router();

var userController = require('../../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.get('/verify', userController.verifyToken);
router.get('/update', userController.updategetUser);
router.get('/delete', userController.deleteUser);

module.exports = router;