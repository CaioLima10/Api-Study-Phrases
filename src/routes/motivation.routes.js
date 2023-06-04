import { Router } from "express";
import MotivationController from "../controllers/motivation.controller";

const routes = Router();

routes.post('/', MotivationController.create)
routes.get('/' , MotivationController.list)

export {routes as motivation}