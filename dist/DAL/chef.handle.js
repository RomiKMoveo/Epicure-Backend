"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllChefs = void 0;
const mongoose_1 = require("mongoose");
const chef_models_1 = require("./models/chef.models");
const getAllChefs = async () => {
    try {
        const chefs = await chef_models_1.ChefModel.find()
            .populate('restaurant')
            .exec();
        return chefs;
    }
    catch (error) {
        throw new mongoose_1.Error(error.message);
    }
};
exports.getAllChefs = getAllChefs;
