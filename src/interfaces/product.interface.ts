import { Document } from "mongoose"

interface Iproduct extends Document{
    title:string
    description:string
    imageUrl:string
    userId:string
    price:number
};

export default Iproduct 