import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    try {
        const {email, password} = await request.json();
        const user = await UserModel.findOne({email: email});

        if(!user) {
            return NextResponse.json({ success: false, message: "User not found" },{status: 400});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid) {
            return NextResponse.json({ success: false, message: "Invalid password" },{status: 400});
        }

        return NextResponse.json({ success: true, message: "User logged in successfully" },{status: 200});

    } catch (error) {
        console.log("Error in login route: ", error);
        return NextResponse.json({ success: false, message: "Internal server error" },{status: 500});
    }
}