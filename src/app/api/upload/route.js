import dbConnect from "@/lib/dbConnect";
import ImageModel from "@/model/Image";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(request) {
    await dbConnect();
    try {
        const { imageUrl, imageId, token } = await request.json();
        console.log('Image URL', imageUrl, 'Image ID', imageId, 'Token', token);

        if (!imageUrl ||!imageId || !token) {
            return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });
        }

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        if (!userData) return NextResponse.json({ success: false, message: 'User not found' }, { status: 400 });

        const newImage = new ImageModel({
            userId: userData.id,
            name: "Untitled",
            url: imageUrl,
            publicId: imageId
        });

        await newImage.save();

        return NextResponse.json({ success: true, message: 'Image Uploaded' }, { status: 200 });
    } catch (error) {
        console.error("error uploading img ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}