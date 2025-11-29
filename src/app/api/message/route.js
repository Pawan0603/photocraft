import dbConnect from "@/lib/dbConnect";
import MessageModel from "@/model/Message";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');

export async function POST(request){
    await dbConnect();
    try {
        const { token, content } = await request.json();
        
        if (!token || !content) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        const newMessage = new MessageModel({
            senderId: userData.id,
            name: content.name,
            email: content.email,
            subject: content.subject,
            message: content.message
        });

        const savedMessage = await newMessage.save();

        return NextResponse.json({ success: true, data: savedMessage }, { status: 201 });
    } catch (error) {
        // console.error("error creating message ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

// Get all message for admin 
// export async function GET(request) {
//     await dbConnect();
//     try {
//         const { searchParams } = new URL(request.url);
//         const token = searchParams.get('token');
//         if (!token) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

//         let userData = jwt.verify(token, process.env.JWT_SECRET);
//         if (!userData.isAdmin) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 403 });

//         const messages = await MessageModel.find().sort({ createdAt: -1 });
//         return NextResponse.json({ success: true, data: messages }, { status: 200 });

//     } catch (error) {
//         console.error("error fetching messages ", error);
//         return NextResponse.json({ success: false, message: error.message }, { status: 500 });
//     }
// }

export async function DELETE(request) {
    await dbConnect();
    try {
        const { token, messageId } = await request.json();

        if (!token || !messageId) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        if (!userData.isAdmin) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 403 });

        const messageData = await MessageModel.findOneAndDelete({ _id: messageId });

        if (!messageData) return NextResponse.json({ success: false, message: 'Message not found' }, { status: 400 });

        return NextResponse.json({ success: true, message: 'Message deleted successfully' }, { status: 200 });

    } catch (error) {
        // console.error("error deleting message ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    await dbConnect();
    try {
        const { token, messageId, content } = await request.json();

        if (!token || !messageId || !content) return NextResponse.json({ success: false, message: 'Invalid Request' }, { status: 400 });

        let userData = jwt.verify(token, process.env.JWT_SECRET);

        if( !userData.isAdmin) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 403 });

        const messageData = await MessageModel.findOneAndUpdate(
            { _id: messageId},
            { 
                name: content.name,
                email: content.email,
                subject: content.subject,
                message: content.message
            },
            { new: true }
        );

        if (!messageData) return NextResponse.json({ success: false, message: 'Message not found' }, { status: 400 });

        return NextResponse.json({ success: true, data: messageData }, { status: 200 });
    } catch (error) {
        // console.error("error updating message ", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}