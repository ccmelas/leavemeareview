const express = require('express');
const DashboardController = require('./../../controllers/DashboardController');
const Authenticated = require('./../../middlewares/Authenticated');

const router = express.Router();

router.get('/',
    Authenticated.middleware(),
    DashboardController.index); 

module.exports = router;