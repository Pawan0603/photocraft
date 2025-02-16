import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(request) {
    await dbConnect();
    try {
        const { token } = await request.json();

        if (!token) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        const {imageData} = await UserModel.findOne({ email: userData.email });

        if (!imageData) return NextResponse.json({ success: false, message: 'User not found' }, { status: 400 });

        return NextResponse.json({ success: true, data: imageData }, { status: 200 });
    } catch (error) {
        console.error("error getting img ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}