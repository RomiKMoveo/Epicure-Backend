import { Error } from 'mongoose';
import { DishModel } from './models/dish.models';
import * as RestaurantHandler from '../DAL/restaurant.handler';
import { RestaurantModel } from './models/restaurant.models';

export const getAllDishes = async () => {
    try {
        const dishes = await DishModel.find()
            .populate({
                path: 'restaurant',
                select: 'title' 
            })
            .exec();
        return dishes;
        } catch (error: any) {
            console.log(error);
            throw new Error(error.message);
            
        }
};

export const getSignatureDishes = async () => {
    try {
        const dishes = await DishModel.find({ isSignature: true })
            .populate({
                path: 'restaurant',
                select: 'title' 
            })
            .exec();
        return dishes;
        } catch (error: any) {
            console.log(error);
            throw new Error(error.message);
            
        }
};

export const getDishByName = async (title: string) => {
    try {
        const caseInsensitiveName = new RegExp(title, 'i'); 
        const dish = await DishModel.findOne({ title: caseInsensitiveName })
            .populate({
                path: 'restaurant',
                select: 'title' 
            })
            .exec();
            
        if (!dish) {
            return null;
        }
        return dish;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getDishById = async (id: string) => {
    try {
        const noSpaceId = id.trim();
        const dish = await DishModel.findOne({ _id: noSpaceId })
            .populate({
                path: 'restaurant',
                select: 'title' 
            })
            .exec();
            
        if (!dish) {
            return null;
        }
        return dish;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const addNewDish = async (dishData: any) => {
    try {
        const newdish = new DishModel({ ...dishData });
        const newdishSaved = await newdish.save();

        const restaurantId = dishData.restaurant;

        if (restaurantId) {
            await RestaurantModel.findByIdAndUpdate(
                restaurantId,
                { $push: { dishes: newdishSaved._id } },
                { new: true, useFindAndModify: false }
            );
        }
        return newdishSaved; 
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const updateDishById = async (dishData: any, id: string) => {
    try {
        console.log(id);
        const dishToUpdate = await DishModel.findByIdAndUpdate(id, dishData,
            { new: true });
            
            if (!dishToUpdate) {
              throw new Error("dish wasn't found");
            }
            
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const deleteDishById = async (id: string) => {
    try {
        const noSpaceId = id.trim();
        const result = await DishModel.deleteOne({ _id: noSpaceId });
        return result.deletedCount > 0;
    } catch (error: any) {
        throw new Error(error.message);
    }
};