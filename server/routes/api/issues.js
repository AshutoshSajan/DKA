var express = require('express');
var router = express.Router();
var jwtAuth = require('../../utils/jwtAuth');
var issueController = require('../../controllers/issueController');

router.post('/', jwtAuth.verifyToken, issueController.add_Issue);
router.get('/', jwtAuth.verifyToken, jwtAuth.isAdmin, issueController.get_All_Issues);
router.get('/:id', jwtAuth.verifyToken, jwtAuth.isAdmin,issueController.get_Issue);
router.delete('/delete/:id', jwtAuth.verifyToken, jwtAuth.isAdmin, issueController.delete_Issue);

module.exports = router;