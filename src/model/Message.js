import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "senderId is required"]
    },
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    subject: {
        type: String,
        required: [true, "subject is required"]
    },
    message : {
        type: String,
        required: [true, "message is required"]
    },
    seen: {
        type: Boolean,
        default: false
    }
});

const MessageModel = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default MessageModel;