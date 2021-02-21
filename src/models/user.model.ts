import { Schema, model } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
import Iuser from "../interfaces/user.interface";
const userSchame = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt:{ type: Date,default:Date.now}
});

userSchame.plugin(mongooseUniqueValidator);

export default model<Iuser>("User", userSchame);
