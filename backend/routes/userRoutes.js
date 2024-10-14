const express = require('express');
const { createUser, loginUser, logoutUser, currentProfile } = require('../controllers/actions');
const { authenticate } = require('../middlewares/authHandler');
const { createPost } = require('../controllers/PostActions');
const router = express.Router();



router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);
router.route("/profile").get(authenticate, currentProfile);
router.route("/post").post(authenticate, createPost);




module.exports = {routes: router}