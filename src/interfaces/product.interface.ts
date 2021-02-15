import { Document } from "mongoose"

export default interface Iproduct extends Document {
    title:string
    description:string
    imageUrl:string
    userId:string
    price:number
} 