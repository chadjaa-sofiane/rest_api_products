import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";

const productRoutes = Router();

productRoutes.get("/:id", productControllers.getOneProduct);
productRoutes.get("/", productControllers.getAllProducts);
productRoutes.post("/", productControllers.createProduct);
productRoutes.put("/:id", productControllers.updateProduct);
productRoutes.delete("/:id", productControllers.deleteOne);

export default productRoutes;
