import mongoose from "mongoose"
require("dotenv").config()
export default async function dbConnect(){
    // await mongoose.connect("mongodb://127.0.0.1:27017/heavensBasket")
    await mongoose.connect("mongodb+srv://summaiya:fathima@cluster0.jawkqoc.mongodb.net/HeavensBasket?retryWrites=true&w=majority")
    console.log("connected")
}