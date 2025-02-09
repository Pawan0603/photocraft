import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
    await dbConnect();
    try {
        const {name, email, password} = await request.json();
        console.log(name, email, password);
        const user = await UserModel.findOne({email: email});
        if(user) {
            return NextResponse.json({ success: false, message: "User already exists" },{status: 400});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        
        return NextResponse.json({ success: true, message: "User created successfully" },{status: 200});
    } catch (error) {
        console.log("Error in signup route: ", error);
        return NextResponse.json({ success: false, message: "Internal server error" },{status: 500}); 
    }

}