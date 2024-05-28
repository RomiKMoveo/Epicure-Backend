import { Error } from 'mongoose';
import { DishModel } from './models/dish.models';

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

