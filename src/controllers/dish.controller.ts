import { Request, Response } from 'express';
import * as dishHandler from '../DAL/dish.handler';

export const getAllDishes = async (req: Request, res: Response) => {
    try{
        let dishes = await dishHandler.getAllDishes();
        res.json(dishes);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};






