var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/display', middleware.allowIfLoggedin, usersController.display);

module.exports = router;
