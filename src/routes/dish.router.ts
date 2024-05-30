import express from 'express';
import * as DishController from '../controllers/dish.controller';

const DishRouter = express.Router();


DishRouter.get('/', DishController.getAllDishes);
DishRouter.get('/signature', DishController.getSignatureDishes);
DishRouter.get('/byName/:title', DishController.getDishByName);
DishRouter.get('/byId/:id', DishController.getDishById);
DishRouter.post('/', DishController.addNewDish);
DishRouter.delete('/:id', DishController.deleteDishById);
DishRouter.put('/:id', DishController.updateDishById);

export default DishRouter;