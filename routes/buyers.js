var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const buyerController = require('../controllers/buyerController');


/* GET users listing. */
router.get('/list-of-sellers', buyerController.getSellers);

router.get('/seller-catalog/:seller_id', buyerController.getSellerCatalog)

router.post('/create-order/:seller_id', buyerController.createOrder);

module.exports = router;
