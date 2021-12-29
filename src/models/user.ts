import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5
      },
      user_type: {   
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 5
      },
      resetPasswordToken: { type: String, default: "" },
      resetPasswordExpires: { type: Date, default: Date.now() },
});

const User = mongoose.model("User",userSchema);

export { User }