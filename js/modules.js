"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./modules/db");
var db_2 = __importDefault(require("./modules/db"));
console.log(db_1.dbUrl);
db_1.getData();
db_1.saveData();
db_2.default();
//模块化于es6相同 也可暴露引入namespace
