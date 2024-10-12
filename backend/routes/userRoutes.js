const express = require('express');
const { createUser, loginUser, logoutUser } = require('../controllers/actions');
const router = express.Router();


router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);



module.exports = {routes: router}