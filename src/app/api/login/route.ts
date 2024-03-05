import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "../../../../lib/connectDb";
import UserModel from "../../../../models/UserModel";
import bcrypt from "bcryptjs"

export async function POST(req: NextRequest) {
    try {
        await connectDb();
        const { email, password } = await req.json();
        const user = await UserModel?.findOne({ email });
        if (!user) {
            return NextResponse.json({ user: null });
        }
        const passwordMatched = await bcrypt.compare(password, user?.password);
        if (passwordMatched) {
            return NextResponse.json({ user })
        } else {
            return NextResponse.json({ user: 'invalid' })
        }
    } catch (error) {
        NextResponse.json({ error })
    }
}