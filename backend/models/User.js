const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
            maxlength: 50
        }
    }, 
    {
        timestamps: true
})

module.exports = mongoose.model('User', UserSchema);
