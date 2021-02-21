import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";

export const signup = (req: Request, res: Response, next: NextFunction) => {
  bcrypt.hash(req.body.password, 10, (error, hash) => {
    if (error) res.status(500).json({ error });
    const newuser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    newuser
      .save()
      .then(() => res.status(201).json({ message: "signup successfuly !!!" }))
      .catch((error) => res.status(400).json({ error }));
  });
};

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  User.find({},{password:0})
    .then((Allusers) => res.status(200).json(Allusers))
    .catch((error) => res.status(404).json({ error }));
};
