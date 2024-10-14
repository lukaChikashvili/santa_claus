const express = require('express');
const { createUser, loginUser, logoutUser, currentProfile } = require('../controllers/actions');
const { authenticate } = require('../middlewares/authHandler');
const { createPost, updatePost, deletePost } = require('../controllers/PostActions');
const router = express.Router();



router.route("/").post(createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutUser);
router.route("/profile").get(authenticate, currentProfile);
router.route("/post").post(authenticate, createPost);
router.route("/update/:id").put(authenticate, updatePost);
router.route("/delete/:id").delete(authenticate, deletePost)





module.exports = {routes: router}