import express from 'express';
import * as UserController from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.post('/login', UserController.authenticateUser);
userRouter.post('/logout', UserController.logoutUser);

export default userRouter;