import mongoose from "mongoose"
import {config} from "dotenv"
config()
export default async function dbConnect(){
    await mongoose.connect("mongodb+srv://summaiya:fathima@cluster0.jawkqoc.mongodb.net/HeavensBasket?retryWrites=true&w=majority")
}