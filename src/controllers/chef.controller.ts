import { Request, Response } from 'express';
import * as ChefHandler from '../DAL/chef.handle';

export const getAllChefs = async (req: Request, res: Response) => {
    try{
        let chefs = await ChefHandler.getAllChefs();
        res.json(chefs);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};

export const getChefByName = async (req: Request, res: Response) => {
    try {
        const chef = await ChefHandler.getChefByName(req.params.title);
        if (!chef) {
            return res.status(404).json({ message: "Chef wasn't found" });
        }
        res.json(chef);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getChefById = async (req: Request, res: Response) => {
    try {
        const chef = await ChefHandler.getChefById(req.params.id);
        if (!chef) {
            return res.status(404).json({ message: "Chef wasn't found" });
        }
        res.json(chef);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const addNewChef = async (req: Request, res: Response) => {
    try {
      const newChef = await ChefHandler.addNewChef(req.body);
      res.status(201).json(newChef);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
  };

export const updateChefById = async (req: Request, res: Response) => {
    try {
        const restaurantToUpdate = await ChefHandler.updateChefById(req.body, req.params.id);
        res.json(restaurantToUpdate);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteChefById = async (req: Request, res: Response) => {
    try {
        await ChefHandler.deleteChefById(req.params.id);
        res.json({ message: 'The chef has been deleted' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getChefOfTheWeek = async (req: Request, res: Response) => {
    try {
        const chefOfTheWeek = await ChefHandler.getChefOfTheWeek();
        res.json(chefOfTheWeek);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updateChefOfTheWeek = async (req: Request, res: Response) => {
    try {
        const restaurantToUpdate = await ChefHandler.updateChefOfTheWeek(req.params.id);
        res.json(restaurantToUpdate);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
