import { NextFunction, Request, Response } from "express";
import product from "../models/product.model";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = new product({
      ...req.body,
    });
    const resault = await newProduct.save();
    if (resault) res.status(201).json(resault);
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error,
    });
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProducts = await product.find({});
    if (allProducts.length === 0)
      res.status(404).json({ message: "there are no products" });
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json({
      meassage: error.message,
      error,
    });
  }
};
