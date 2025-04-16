const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.funcGetUsers);

module.exports = router;