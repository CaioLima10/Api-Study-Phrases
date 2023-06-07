import { Router } from "express";

import MotivationControllers from '../controllers/phrasesMotivation.controllers.js'
import { validateMotivationalMiddleware } from "../middlewares/phrases.motivation.middle.js";

const routes = Router();

routes.post("/" ,validateMotivationalMiddleware , MotivationControllers.create)
routes.get("/", MotivationControllers.list)


export { routes as motivationPhrasesRoutes };