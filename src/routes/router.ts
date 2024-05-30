import express from 'express';
import chefRouter from './chef.router'
import dishRouter from './dish.router';
import restaurantRouter from './restaurant.router';

const router = express.Router();

router.use('/chef', chefRouter);
router.use('/dish', dishRouter);
router.use('/restaurant', restaurantRouter);

export default router;