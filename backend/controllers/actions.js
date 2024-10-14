const { asyncHandler } = require("../middlewares/asyncHandler");
const { User } = require('../models/userModel');
const bcrypt  =  require('bcryptjs');
const { generateToken } = require("../utils/createToken");


// create new users

const createUser = asyncHandler(async(req, res) => {
   
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        res.json({message: "fill all inputs"});

    }

    const userExists = await User.findOne({email});

    if(userExists) res.status(400).send("user already exists");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User({username, email, password: hashedPassword});


    try {
       await newUser.save();
       generateToken(res, newUser._id);

       res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email

       });


        
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
});


// authenticate registered users

const loginUser = asyncHandler(async(req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(500).json({message: "email or password needed"});

  }

  const user = await User.findOne({email});

  if(user) {
    let isValidPassword = await bcrypt.compare(password, user.password);

    if(isValidPassword) {
        generateToken(res, user._id);

        res.status(201).json({
         _id: user._id,
         username: user.username,
         email: user.email
 
        });
        
        return;
 
    }
  }


});

// loguot function
const logoutUser = asyncHandler(async(req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });

  res.status(200).json({message: "logged out successfully"});
});

// get specific user
const currentProfile = asyncHandler(async(req, res) => {
    
    const user = await User.findById(req.user._id);

    if(user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    }else {
        res.status(404);
        throw new Error('user not found')
    }


});

// update profile 
const updateProfile = asyncHandler(async(req, res) => {
    
  const user = await User.findById(req.user._id);
  

  if(user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if(req.body.password) {
       user.password = req.body.password;

    }

    const updatedUser = await user.save();

    res.json({
        _id: updatedUser._id,
        username:  updatedUser.username,
        email: updatedUser.email,
       
    });
}else {
    res.status(404);
   throw new Error('user not found');
}



})











module.exports = {
    createUser,
    loginUser,
    logoutUser,
    currentProfile,
    updateProfile
}

