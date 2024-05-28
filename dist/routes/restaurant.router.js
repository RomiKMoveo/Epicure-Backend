"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_controller_1 = require("../controllers/restaurant.controller");
const restaurantRouter = express_1.default.Router();
restaurantRouter.get('/', restaurant_controller_1.getAllRestaurants);
exports.default = restaurantRouter;
