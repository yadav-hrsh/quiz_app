import mongoose from 'mongoose';

export default async function connect(){
    mongoose.connect(process.env.MONGODB)
    console.log("database connected")
}