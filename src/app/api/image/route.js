import dbConnect from "@/lib/dbConnect";
import ImageModel from "@/model/Image";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request) {
    await dbConnect();
    try {
        const { token, imageId, publicId } = await request.json();

        if (!token || !imageId) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                console.error("Cloudinary error: ", error);
                return NextResponse.json({ success: false, message: error.message }, { status: 500 });
            }
            console.log("Cloudinary result: ", result);
        });

        const imageData = await ImageModel.findOneAndDelete({ _id: imageId, userId: userData.id });

        if (!imageData) return NextResponse.json({ success: false, message: 'Image not found' }, { status: 400 });

        return NextResponse.json({ success: true, message: 'Image deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error("error deleting img ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    await dbConnect();
    try {
        const { token, imageId, name } = await request.json();

        if (!token || !imageId || !name) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        const imageData = await ImageModel.findOneAndUpdate(
            { _id: imageId, userId: userData.id },
            { name },
            { new: true }
        );

        if (!imageData) return NextResponse.json({ success: false, message: 'Image not found' }, { status: 400 });

        return NextResponse.json({ success: true, data: imageData }, { status: 200 });
    } catch (error) {
        console.error("error updating img ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}