import { Router } from "express";
import MotivationController from "../controllers/motivation.controller";

const routes = Router();

routes.listMotivation('/' , MotivationController.list)

export {routes as motivation}