import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../lib/connectDb";
import UserModel from "../../../../models/UserModel";
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();
        // console.log('printing request body', req?.body);
        // console.log(name, email, password);
        const hashedPassword = await bcrypt.hash(password, 10);
        await connectDb();
        await UserModel.create({ name, email, password: hashedPassword });
        return NextResponse.json({ message: 'user registered successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "an error occured while registering" }, { status: 500 });
    }
}