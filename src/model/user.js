import mongoose, {Schema} from "mongoose";

const imageSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    public_id: {
        type: String,
        required: [true, "public_id is required"]
    },
})

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "Email name is required"],
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "plese use a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password  is required"]
    },
    subscription: {
        type: String,
        enum: ["free", "pro", "premium"],
        default: "free"
    },
    imageData: [imageSchema]
})

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)

export default UserModel