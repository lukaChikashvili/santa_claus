const { asyncHandler } = require("../middlewares/asyncHandler");
const { Post } = require('../models/postModel');


const createPost = asyncHandler(async(req, res) => {
   const { content } = req.body;

   if(!content) {
    res.status(500).json({message: "no content is written"});
   }

   try {
      const post = await Post.create({
        content,
        user: req.user._id,
        
      });

      res.status(201).json({
        _id: post._id,
        content: post.content,
        user: post.user,
        
        
    });
   } catch (error) {
      console.log(error)
   }
})




module.exports = {
    createPost
}
