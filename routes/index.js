var express = require('express');
var router = express.Router();

var bookController = require('../controllers/bookController');

router.get('/',  bookController.index)
router.get('/show',  bookController.show)
router.post('/',  bookController.store)
router.put('/',  bookController.update)
router.delete('/',  bookController.del)

module.exports = router;

