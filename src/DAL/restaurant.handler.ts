import { Error } from 'mongoose';
import { RestaurantModel } from './models/restaurant.models';
import { ChefModel } from './models/chef.models';

export const getAllRestaurants = async () => {
    try {
        const restaurants = await RestaurantModel.find()
            .populate({
                path: 'chef',
                select: 'title' 
            })
            .populate({
                path: 'dishes',
                select: 'title'
            })
            .exec();
        return restaurants;
        } catch (error: any) {
            console.log(error);
            throw new Error(error.message);
            
        }
};

export const getPopularRestaurants = async () => {
    try {
        const popularRestaurants = await RestaurantModel.find({ isPopular: true })
            .exec();
        return popularRestaurants;
        } catch (error: any) {
            console.log(error);
            throw new Error(error.message);
            
        }
};

export const getRestaurantByName = async (title: string) => {
    try {
        const caseInsensitiveName = new RegExp(title, 'i'); 
        const restaurant = await RestaurantModel.findOne({ title: caseInsensitiveName })
            .populate({
                path: 'chef',
                select: 'title' 
            })
            .exec();
            
        if (!restaurant) {
            return null;
        }
        return restaurant;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getRestaurantById = async (id: string) => {
    try {
        const noSpaceId = id.trim(); 
        const restaurant = await RestaurantModel.findOne({ _id: noSpaceId })
            .populate({
                path: 'chef',
                select: 'title' 
            })
            .exec();
            
        if (!restaurant) {
            return null;
        }
        return restaurant;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const addNewRestaurant = async (restaurantData: any) => {
    try {
        const newRestaurant = new RestaurantModel({ ...restaurantData });
        const newRestaurantSaved = await newRestaurant.save();
        
        const chefId = restaurantData.chef;

        if (chefId) {
            await ChefModel.findByIdAndUpdate(
                chefId,
                { $push: { restaurants: newRestaurantSaved._id } },
                { new: true, useFindAndModify: false }
            );
        }
        return newRestaurantSaved; 
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const updateRestaurantById = async (restaurantData: any, id: string) => {
    try {
        const noSpaceId = id.trim();
        const restaurantToUpdate = await RestaurantModel.findByIdAndUpdate(noSpaceId, restaurantData,
            { new: true });
            
            if (!restaurantToUpdate) {
              throw new Error("restaurant wasn't found");
            }
            
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const deleteRestaurantById = async (id: string) => {
    try {
        const noSpaceId = id.trim();
        const result = await RestaurantModel.deleteOne({ _id: noSpaceId });
        return result.deletedCount > 0;
    } catch (error: any) {
        throw new Error(error.message);
    }
};