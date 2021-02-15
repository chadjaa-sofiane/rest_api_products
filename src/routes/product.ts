import { Request, Response, NextFunction, Router } from "express";
import * as productControllers from "../controllers/product.controllers";

const productRoutes = Router();

productRoutes.get("/api/getAllProducts", productControllers.getAllProducts);
productRoutes.post("/api/createProduct", productControllers.createProduct);

export default productRoutes;
