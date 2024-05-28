import { Request, Response } from 'express';
import * as chefHandler from '../DAL/chef.handle';

export const getAllChefs = async (req: Request, res: Response) => {
    try{
        let chefs = await chefHandler.getAllChefs();
        res.json(chefs);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};






