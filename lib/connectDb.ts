import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false;

export const connectDb = async () => {
    if(isConnected){
        console.log('database is already connected');
        return;
    }
    console.log("connecting to database...");
    try {
        const options: ConnectOptions = {
            dbName: process.env.DB_NAME
        }
        await mongoose.connect(process.env.DB_URI as string, options);
        isConnected = true;
        console.log("connected to database");
    } catch (error) {
        console.log(`failed to connect to database. error: ${error}`);
    }
}