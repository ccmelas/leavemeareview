const express = require('express');
const RegisterController = require('../../controllers/RegisterController');

const router = express.Router();

router.post('/register', 
    RegisterController.registerRules,
    RegisterController.uniqueEmail,
    RegisterController.validateRegister,
    RegisterController.register)

module.exports = router;
