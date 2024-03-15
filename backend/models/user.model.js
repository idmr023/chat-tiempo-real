import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minligth: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
}, 
{ timestamps : true} //permite guardar en que momento fueron creados y/o agregados. createdAt, updatedAt => memebr since <createdAt>
);

const User = mongoose.model('User', userSchema);

export default User;