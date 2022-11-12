import { Schema, model } from "mongoose"
import mongoose from "mongoose";
import ProductModel from "../models/products"

const userSchema = new Schema( {
    name: { type: String, required: true },
    email: { type: String, },
    role: { type: String, enum: [ "user", "admin" ] },
    cartItem: [ { type: mongoose.ObjectId, ref: ProductModel } ],
    wishlist: [ { type: mongoose.ObjectId, ref: ProductModel } ],
    pincode: { type: String }
}, {
    versionKey: false,
} )

const userModel = new model( "user", userSchema )

module.exports = userModel