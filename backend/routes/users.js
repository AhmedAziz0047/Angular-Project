const express = require('express');
const router = express.Router();

const userController = require('../Controller/user');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile/:id', userController.profile);

module.exports = router;