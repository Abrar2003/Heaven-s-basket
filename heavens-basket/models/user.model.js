import {Schema, model} from "mongoose"
import ProductModel from "../models/products"

const userSchema= new Schema({
    name:{type:String, required:true},
    email: {type: String,},
    role: {type: String, enum:["user", "admin"]},
    cartItem:[{ type: Schema.Types.ObjectId, ref: ProductModel }],
    wishlist:[{ type: Schema.Types.ObjectId, ref: ProductModel }],
    pincode: {type:String}
},{
    versionKey:false,
})

const userModel=model("user", userSchema)

module.exports = userModel