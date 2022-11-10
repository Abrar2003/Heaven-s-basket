import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    brand:{type: String , required:true},
    description:{type: String , required:true},
    image:{type:String, required:true},
    title:{type:String, reuired:true},
    price:{type:Number, required:true},
    piece:{type:String, required:true},
    popUpMess:{type:String, required:true}

},{
    versionKey:false,
})
const ProductModel = mongoose.model("product", ProductSchema)

export default ProductModel;