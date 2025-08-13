import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(request) {
    await dbConnect();
    try {
        const { email, password } = await request.json();
        console.log(email, password);
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            return NextResponse.json({ success: false, message: "User not found" }, { status: 200 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ success: false, message: "Invalid password" }, { status: 200 });
        }

        const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: "1d" });

        const cookieStore = await cookies()
        cookieStore.set("TheardCraftToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: '/',
        })

        return NextResponse.json({ success: true, message: "User logged in successfully", token: token }, { status: 200 });

    } catch (error) {
        console.log("Error in login route: ", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 200 });
    }
}