const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxLength: 500,
    },

    image: {
        type: String, 
        required: false,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    username: {
        type: String,
        required: true
    }

    
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);


module.exports = {Post};
