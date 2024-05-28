"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRestaurants = void 0;
const mongoose_1 = require("mongoose");
const getAllRestaurants = async () => {
    try {
        // const restaurants = await RestaurantModel.find()
        //     .populate('chef')
        //     .populate('dishes')
        //     .exec();
        return "string";
    }
    catch (error) {
        throw new mongoose_1.Error(error.message);
    }
};
exports.getAllRestaurants = getAllRestaurants;
