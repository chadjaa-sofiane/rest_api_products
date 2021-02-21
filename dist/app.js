"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = require("dotenv");
var product_1 = __importDefault(require("./routes/product"));
dotenv_1.config();
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(product_1.default);
mongoose_1.default
    .connect("mongodb+srv://" + process.env.USER_NAME + ":" + process.env.PASSWORD + "@cluster0.d12nl.mongodb.net/" + process.env.HOST_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(function () { return console.log("connect with database successfuly"); })
    .catch(function () { return console.log("field to connect with database"); });
app.use(body_parser_1.default.json());
exports.default = app;
