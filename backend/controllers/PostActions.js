const { asyncHandler } = require("../middlewares/asyncHandler");
const { Post } = require('../models/postModel');


// create post

const createPost = asyncHandler(async(req, res) => {
   const { content } = req.body;

   if(!content) {
    res.status(500).json({message: "no content is written"});
   }

   

   try {
      const post = await Post.create({
        content,
        user: req.user._id,
        username: req.user.username
        
      });

      res.status(201).json({
        _id: post._id,
        content: post.content,
        user: post.user,
        username: post.username
        
    });
   } catch (error) {
      console.log(error)
   }
});


// update post
const updatePost = asyncHandler(async(req, res) => {
     const { id } = req.params;
     const  { content } = req.body;

     const post = await Post.findById(id);

     if(!post) {
        return res.status(404).json({ message: "Post not found" });
     }

     if (post.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "You are not authorized to update this post" });
    }

    post.content = content;
    const updatedPost = await post.save();

    res.status(200).json({
        message: "Post updated successfully",
        post: {
            _id: updatedPost._id,
            content: updatedPost.content,
            
        }
    });

});

// delete post
const deletePost = asyncHandler(async(req, res) => {
  const { id } = req.params;

  const post = await Post.findByIdAndDelete(id);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
}

if (post.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "You are not authorized to delete this post" });
}

 

res.status(200).json({ message: "Post deleted successfully" });

});

// get all posts
const getAllPosts = asyncHandler(async(req, res) => {
  const allPosts = await Post.find({});



  res.status(200).json(allPosts);
})




module.exports = {
    createPost,
    updatePost,
    deletePost,
    getAllPosts
}
