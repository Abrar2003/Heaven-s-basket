import mongoose from "mongoose"

export default async function dbConnect(){
    await mongoose.connect("mongodb+srv://summaiya:fathima@cluster0.jawkqoc.mongodb.net/HeavensBasket?retryWrites=true&w=majority")
}