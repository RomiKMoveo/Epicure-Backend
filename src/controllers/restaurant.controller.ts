import { Request, Response } from 'express';
import * as restaurantHandler from '../DAL/restaurant.handler';

export const getAllRestaurants = async (req: Request, res: Response) => {
    try{
        let restaurants = await restaurantHandler.getAllRestaurants();
        res.json(restaurants);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};






