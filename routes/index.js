var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

router.get('/',  bookController.index)
router.get('/show',  bookController.show)
router.post('/store',  bookController.store)
router.put('/update',  bookController.update)
router.delete('/del',  bookController.del)

module.exports = router;

