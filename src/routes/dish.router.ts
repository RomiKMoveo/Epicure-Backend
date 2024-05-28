import express from 'express';
import { getAllDishes } from '../controllers/dish.controller';

const DishRouter = express.Router();


DishRouter.get('/', getAllDishes);


export default DishRouter;