import { Error } from 'mongoose';
import { RestaurantModel } from './models/restaurant.models';

export const getAllRestaurants = async () => {
    try {
        const restaurants = await RestaurantModel.find()
            .populate({
                path: 'chef',
                select: 'title' 
            })
            .populate('dishes')
            .exec();
        return restaurants;
        } catch (error: any) {
            console.log(error);
            throw new Error(error.message);
            
        }
};
