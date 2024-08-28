const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    },
    city: {
        type: String,
    },
},
{timestamps: true} //updated and created at which time
);

const User = mongoose.model('user', userSchema);
module.exports = User;