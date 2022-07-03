"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
// npm install --save-dev @types/node@16 @types/express@4
app.get('/', function (req, res) {
    console.log('Hello world!');
    res.send('Hello World');
});
app.listen(3000);
