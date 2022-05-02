var express = require('express');
var router = express.Router();
const middleware = require('../middlewares/middlewares');
const sellerController = require('../controllers/sellerController');


/* GET users listing. */
router.post('/create-catalog', sellerController.create);

router.get('/orders', sellerController.getAllOrders);

module.exports = router;
