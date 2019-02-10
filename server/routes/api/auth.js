const express = require('express');
const RegisterController = require('../../controllers/RegisterController');
const LoginController = require('../../controllers/LoginController');

const router = express.Router();

router.post('/register', 
    RegisterController.registerRules,
    RegisterController.uniqueEmail,
    RegisterController.validateRegister,
    RegisterController.register)

router.post('/login',
    LoginController.validationRules,
    LoginController.validateLogin,
    LoginController.login);

module.exports = router;
