import express from 'express';

import { getAllRestaurants } from '../controllers/restaurant.controller';

const restaurantRouter = express.Router();

restaurantRouter.get('/', getAllRestaurants);

export default restaurantRouter;