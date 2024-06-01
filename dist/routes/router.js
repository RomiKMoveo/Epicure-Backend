"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chef_router_1 = __importDefault(require("./chef.router"));
const dish_router_1 = __importDefault(require("./dish.router"));
const restaurant_router_1 = __importDefault(require("./restaurant.router"));
const router = express_1.default.Router();
router.use('/chef', chef_router_1.default);
router.use('/dish', dish_router_1.default);
router.use('/restaurant', restaurant_router_1.default);
exports.default = router;
