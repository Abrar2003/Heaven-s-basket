import mongoose, {Schema, model, models} from "mongoose"
import ProductModel from "../models/products"

const userSchema= new Schema({
    name:{type:String, required:true},
    email: {type: String,},
    role: {type: String, enum:["user", "admin"]},
    // cartItem:[{ type: mongoose.ObjectId, ref: ProductModel }],
    cartItem:[{ type: String }],
    wishlist:[{ type: mongoose.ObjectId, ref: ProductModel }],
    pincode: {type:String}
},{
    versionKey:false,
})

const userModel=models.user || model("user", userSchema)

module.exports = userModel