import { Request, Response } from 'express';
import * as RestaurantHandler from '../DAL/restaurant.handler';

export const getAllRestaurants = async (req: Request, res: Response) => {
    try{
        let restaurants = await RestaurantHandler.getAllRestaurants();
        res.json(restaurants);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};

export const getPopularRestaurants = async (req: Request, res: Response) => {
    try{
        let restaurants = await RestaurantHandler.getPopularRestaurants();
        res.json(restaurants);
    } catch (error: any) {
        res.status(500).json({ error });
    }
};

export const getRestaurantByName = async (req: Request, res: Response) => {
    try {
        const restaurant = await RestaurantHandler.getRestaurantByName(req.params.title);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant wasn't found" });
        }
        res.json(restaurant);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getRestaurantById = async (req: Request, res: Response) => {
    try {
        const restaurant = await RestaurantHandler.getRestaurantById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant wasn't found" });
        }
        res.json(restaurant);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const addNewRestaurant = async (req: Request, res: Response) => {
    try {
      const newRestaurant = await RestaurantHandler.addNewRestaurant(req.body);
      res.status(201).json(newRestaurant);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
  };

export const updateRestaurantById = async (req: Request, res: Response) => {
    try {
        const restaurantToUpdate = await RestaurantHandler.updateRestaurantById(req.body, req.params.id);
        res.json(restaurantToUpdate);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRestaurantById = async (req: Request, res: Response) => {
    try {
        await RestaurantHandler.deleteRestaurantById(req.params.id);
        res.json({ message: 'The restaurant has been deleted' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};