import { Error } from 'mongoose';
import { ChefModel } from './models/chef.models';

export const getAllChefs = async () => {
    try {
        const chefs = await ChefModel.find()
            .populate('restaurants')
            .exec();
        return chefs;
        } catch (error: any) {
            throw new Error(error.message);
        }
};

