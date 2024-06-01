"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chef_handle_1 = require("../DAL/chef.handle");
const ChefRouter = express_1.default.Router();
ChefRouter.get('/', chef_handle_1.getAllChefs);
exports.default = ChefRouter;
