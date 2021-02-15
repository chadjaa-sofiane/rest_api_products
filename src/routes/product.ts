import { Request, Response, NextFunction, Router } from "express";

const userRoutes = Router();

userRoutes.get(
  "/api/:name",
  (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;
    res.send(`hello ${name}`);
  }
);

export default userRoutes;
