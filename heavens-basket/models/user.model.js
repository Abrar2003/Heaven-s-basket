import {Schema, model} from "mongoose"

const userSchema= new Schema({
    name:{type:String, required:true},
    email: {type: String,},
    role: {type: String, enum:["user", "admin"]},
    cartItem:{type:Array},
    whishlist:{type:Array},
    pincode: {type:String}
},{
    versionKey:false,
})

const userModel=model("user", userSchema)

module.exports = userModel