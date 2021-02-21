import { NextFunction, Request, Response } from "express";
import Product from "../models/product.model";
import { Types } from "mongoose";
const { ObjectId } = Types;

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newProduct = new Product({
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
    const allProducts = await Product.find({});
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
export const getOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Product.findById(ObjectId(req.params.id));
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.meassage,
      error,
    });
  }
};

export const updateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const _id = ObjectId(req.params.id);
  const newData = new Product({ ...req.body });
  console.log(newData);
  if (_id)
    Product.updateOne({ _id }, newData)
      .then(() => res.status(201).json({ message: "updated successfuly !" }))
      .catch((error) => res.status(400).json({ error }));
};

export const deleteOne = (req: Request, res: Response, next: NextFunction) => {
  const _id = ObjectId(req.params.id);
  Product.deleteOne({ _id })
    .then(() => res.status(200).json({ message: "deleted successfuly !" }))
    .catch((error) => res.status(400).json({ error }));
};
