const { asyncHandler } = require("../middlewares/asyncHandler");
const { User } = require('../models/userModel');
const bcrypt  =  require('bcryptjs');


const createUser = asyncHandler(async(req, res) => {
   
    const { username, email, password } = req.body;

    if(!username || !email || !password) {
        res.status(500).json({message: "fill all inputs"});

    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User({username, email, password: hashedPassword});


    try {
       await newUser.save();

       res.json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email

       });


        
        
    } catch (error) {
        res.status(201).json({message: error.message})
        
    }
})





module.exports = {
    createUser
}

