import express from 'express';
import * as RestaurantController from '../controllers/restaurant.controller';

const restaurantRouter = express.Router();

restaurantRouter.get('/', RestaurantController.getAllRestaurants);
restaurantRouter.get('/', RestaurantController.getPopularRestaurants);
restaurantRouter.get('/byName/:title', RestaurantController.getRestaurantByName);
restaurantRouter.get('/byId/:id', RestaurantController.getRestaurantById);
restaurantRouter.post('/', RestaurantController.addNewRestaurant);
restaurantRouter.delete('/:id', RestaurantController.deleteRestaurantById);
restaurantRouter.put('/:id', RestaurantController.updateRestaurantById);


export default restaurantRouter;