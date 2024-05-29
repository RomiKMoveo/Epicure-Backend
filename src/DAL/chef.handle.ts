import { Error } from 'mongoose';
import { ChefModel } from './models/chef.models';

export const getAllChefs = async () => {
    try {
        const chefs = await ChefModel.find()
            .populate({
                path: 'restaurant',
                select: 'title image'
            })
            .exec();
        return chefs;
        } catch (error: any) {
            throw new Error(error.message);
        }
};

export const getChefByName = async (title: string) => {
    try {
        const caseInsensitiveName = new RegExp(title, 'i'); 
        const chef = await ChefModel.findOne({ title: caseInsensitiveName })
            .populate({
                path: 'restaurants'
            })
            .exec();
            
        if (!chef) {
            return null;
        }
        return chef;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getChefById = async (id: string) => {
    try {
        const chef = await ChefModel.findOne({ _id: id })
            .populate({
                path: 'restaurants'
            })
            .exec();
            
        if (!chef) {
            return null;
        }
        return chef;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const addNewChef = async (chefData: any) => {
    try {
        const newChef = new ChefModel({ ...chefData });
        const newChefSaved = await newChef.save();
        return newChefSaved; 
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const updateChefById = async (chefData: any, id: string) => {
    try {
        const chefToUpdate = await ChefModel.findByIdAndUpdate(id, chefData,
            { new: true });
            
            if (!chefToUpdate) {
              throw new Error("chef wasn't found");
            }
            
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const deleteChefById = async (id: string) => {
    try {
        const result = await ChefModel.deleteOne({ _id: id });
        return result.deletedCount > 0;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getChefOfTheWeek = async () => {
    try {
        const chefOfTheWeek = await ChefModel.findOne({ chefOfTheWeek: true }).populate('restaurants').exec();
        return chefOfTheWeek;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const updateChefOfTheWeek = async ( id: string) => {
    try {
        const chefOfTheWeekOld  = await getChefOfTheWeek();
        if (chefOfTheWeekOld) {
            await updateChefById({ chefOfTheWeek: false }, chefOfTheWeekOld.id)
        }
        
        const chefOfTheWeekNew = await ChefModel.findByIdAndUpdate(
            id,
            { chefOfTheWeek: true },
            { new: true }
        )
            .populate('restaurants')
            .exec();
        return chefOfTheWeekNew;
    } catch (error: any) {
        throw new Error(error.message);
    }
};