import mongoose from "mongoose"
require("dotenv").config()
export default async function dbConnect(){
    // await mongoose.connect("mongodb://127.0.0.1:27017/heavensBasket")
    await mongoose.connect(process.env.MONGO_URL)
}