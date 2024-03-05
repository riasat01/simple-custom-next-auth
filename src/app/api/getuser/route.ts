import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../lib/connectDb";
import UserModel from "../../../../models/UserModel";

export async function POST(req: NextRequest){
    try {
        await connectDb();
        const {email} = await req.json();
        // console.log(email);
        const user = await UserModel.findOne({email}).select("_id");
        // console.log(user);
        return NextResponse.json({user});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error});
    }
}