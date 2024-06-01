"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDishes = void 0;
const mongoose_1 = require("mongoose");
const dish_models_1 = require("./models/dish.models");
const getAllDishes = async () => {
    try {
        const dishes = await dish_models_1.DishModel.find()
            .populate('restaurant')
            .exec();
        return dishes;
    }
    catch (error) {
        throw new mongoose_1.Error(error.message);
    }
};
exports.getAllDishes = getAllDishes;
