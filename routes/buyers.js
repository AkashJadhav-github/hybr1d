var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const buyerController = require('../controllers/buyerController');


/* GET users listing. */
router.get('/list-of-sellers', middleware.allowIfLoggedin, buyerController.getSellers);

router.get('/seller-catalog/:seller_id', middleware.allowIfLoggedin, buyerController.getSellerCatalog)

router.post('/create-order/:seller_id', middleware.allowIfLoggedin, buyerController.createOrder);

module.exports = router;
