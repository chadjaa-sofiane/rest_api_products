import { NextFunction, Request, Response } from "express"
import Iproduct from "../interfaces/product.interface"
import product from "../models/product.model"

const createProduct = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const newProduct = new product({
            ...req.body    
        })
        const res = await newProduct.save()
    }catch(error){
        res.status(400).json({
            message:error.message,
            error
        })
    }
}

export {

}