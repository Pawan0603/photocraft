import mongoose, {Schema} from "mongoose";

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
    }
})

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)

export default UserModel