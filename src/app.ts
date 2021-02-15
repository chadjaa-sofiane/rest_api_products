import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { config } from "dotenv";
import productRoutes from "./routes/product";
config();
const app = express();

app.use(bodyParser.json());
app.use(productRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.d12nl.mongodb.net/${process.env.HOST_URL}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("connect with database successfuly"))
  .catch(() => console.log("field to connect with database"));

app.use(bodyParser.json());

export default app;
