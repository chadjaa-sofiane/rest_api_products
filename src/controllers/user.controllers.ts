import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import { hash, compare } from "bcrypt";
import prepareToken from "./utils/prepareToken";

export const signup = (req: Request, res: Response, next: NextFunction) => {
  hash(req.body.password, 10, (error, hash) => {
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

export const login = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) return res.status(401).json({ error: "email most not be empty" });
  if (!password)
    return res.status(401).json({ error: "password most not be empty" });

  User.findOne({ email })
    .then((user) => {
      if (!user) return res.status(401).json({ error: "user not found" });
      compare(password, user.password, (error, resault) => {
        if(error) return res.status(500).json({ error })
        if (!resault) return res.status(401).json({ error:"password is incorrect !!" });
        const userId = user._id;
        res.status(200).json({
          userId,
          token: prepareToken({ userId }),
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  User.find({}, { password: 0 })
    .then((Allusers) => res.status(200).json(Allusers))
    .catch((error) => res.status(404).json({ error }));
};
