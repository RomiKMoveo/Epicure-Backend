import express from 'express';

import { getAllChefs } from '../controllers/chef.controller';


const ChefRouter = express.Router();

ChefRouter.get('/', getAllChefs);

export default ChefRouter;