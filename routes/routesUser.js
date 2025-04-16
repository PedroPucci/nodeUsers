// const express = require('express');
// const userControl = require('../controller/userController');

// const router = express.Router();

// router.get("/", userControl.funcHello);
// router.get("/users", userControl.funcGetUsers);

// module.exports = router;

const express = require("express");
const userControl = require("../controller/userController");

const router = express.Router();

router.get("/", userControl.funcHello);

router.get("/users", userControl.funcGetUsers);

router.get("/users/name/:name", userControl.funcGetUserByName);

router.post("/users", userControl.funcCreateUser);

router.put("/users/:id", userControl.funcUpdateUser);

router.delete("/users/:id", userControl.funcDeleteUser);

module.exports = router;
