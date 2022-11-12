import {Schema ,models,model} from 'mongoose';

const ProductSchema =new Schema({
    id:{type:String,required:true},
    brand:{type: String , required:true},
    category:{type:String,required:true},
    image:{type:String, required:true},
    title:{type:String, reuired:true},
    price:{type:Number, required:true},
    piece:[{type:String, required:true}],
    popUpMess:{type:String, required:true}

},{
    versionKey:false,
})
const ProductModel =models.product || model("product", ProductSchema)

export default ProductModel;