import express from 'express';

import * as ChefController from '../controllers/chef.controller';

const ChefRouter = express.Router();

ChefRouter.get('/', ChefController.getAllChefs);
ChefRouter.get('/byName/:title', ChefController.getChefByName);
ChefRouter.get('/byId/:id', ChefController.getChefById);
ChefRouter.get('/chefOfTheWeek', ChefController.getChefOfTheWeek);
ChefRouter.post('/', ChefController.addNewChef);
ChefRouter.delete('/:id', ChefController.deleteChefById);
ChefRouter.put('/:id', ChefController.updateChefById);
ChefRouter.put('/chefOfTheWeek/:id', ChefController.updateChefOfTheWeek);

export default ChefRouter;