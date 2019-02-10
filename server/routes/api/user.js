const router = require('express').Router();
const UserController = require('../../controllers/UserController');
const Authenticated = require('../../middlewares/Authenticated');

router.get('/profile', 
    Authenticated.middleware(),
    UserController.profile);

module.exports = router;