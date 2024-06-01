import { Request, Response } from 'express';
import * as DishHandler from '../DAL/dish.handler';

export const getAllDishes = async (req: Request, res: Response) => {
    try{
        let dishes = await DishHandler.getAllDishes();
        res.json(dishes);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};

export const getSignatureDishes = async (req: Request, res: Response) => {
    try{
        let dishes = await DishHandler.getSignatureDishes();
        res.json(dishes);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};

export const getDishByName = async (req: Request, res: Response) => {
    try {
        const dish = await DishHandler.getDishByName(req.params.title);
        if (!dish) {
            return res.status(404).json({ message: "Dish wasn't found" });
        }
        res.json(dish);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getDishById = async (req: Request, res: Response) => {
    try {
        const dish = await DishHandler.getDishById(req.params.id);
        if (!dish) {
            return res.status(404).json({ message: "Dish wasn't found" });
        }
        res.json(dish);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const addNewDish = async (req: Request, res: Response) => {
    try {
      const newRestaurant = await DishHandler.addNewDish(req.body);
      res.status(201).json(newRestaurant);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
  };

export const updateDishById = async (req: Request, res: Response) => {
    try {
        const restaurantToUpdate = await DishHandler.updateDishById(req.body, req.params.id);
        res.json(restaurantToUpdate);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteDishById = async (req: Request, res: Response) => {
    try {
        await DishHandler.deleteDishById(req.params.id);
        res.json({ message: 'The dish has been deleted' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
