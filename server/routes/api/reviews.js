const express = require('express');
const ReviewController = require('./../../controllers/ReviewController');
const Authenticated = require('./../../middlewares/Authenticated');

const router = express.Router();

router.get('/',
    Authenticated.middleware(),
    ReviewController.index);
    
router.get('/:id',
    Authenticated.middleware(),
    ReviewController.show);

router.post('/',
    Authenticated.middleware(),
    ReviewController.validateStore,
    ReviewController.store); 

module.exports = router;