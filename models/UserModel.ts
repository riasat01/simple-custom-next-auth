import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    "name": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    }
}, {timestamps: true});


const UserModel = models.User || model('User', UserSchema);

export default UserModel;
