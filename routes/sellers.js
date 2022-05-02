var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const sellerController = require('../controllers/sellerController');


/* GET users listing. */
router.post('/create-catalog', middleware.allowIfLoggedin, sellerController.create);

router.get('/orders', middleware.allowIfLoggedin, sellerController.getAllOrders);

module.exports = router;
