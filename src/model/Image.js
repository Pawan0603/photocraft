import mongoose, { Schema } from "mongoose";

const imageSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "userId is required"]
    },
    name: {
        type: String,
        default: "Untitled",
        required: [true, "name is required"]
    },
    url: {
        type: String,
        required: [true, "url is required"]
    },
    publicId: {
        type: String,
        required: [true, "publicId is required"]
    },
    altText: {
        type: String,
        default: "PhotocraftImage"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const ImageModel = mongoose.models.Image || mongoose.model("Image", imageSchema);

export default ImageModel;
