"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dish_controller_1 = require("../controllers/dish.controller");
const DishRouter = express_1.default.Router();
DishRouter.get('/', dish_controller_1.getAllDishes);
exports.default = DishRouter;
