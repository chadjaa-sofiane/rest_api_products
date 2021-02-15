import { Schema,model } from "mongoose"
import mongooseUniqueValidator from "mongoose-unique-validator"
import Iproduct from "../interfaces/product.interface";

const productSchame:Schema =new Schema({
 title:{type:String,required:true},
 description:{type:String,required:true},
 imageUrl:{type:String,required:true},
 userId:{type:Schema.Types.ObjectId,ref:"User"},
 price:{type:Number,ref:"User"}
}) 

productSchame.plugin(mongooseUniqueValidator);

export default model<Iproduct>("Product",productSchame);