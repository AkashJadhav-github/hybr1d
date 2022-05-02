var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const userController = require('../controllers/userController');


/* GET users listing. */
router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;
