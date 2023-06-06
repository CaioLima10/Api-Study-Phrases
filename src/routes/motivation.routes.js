import { Router } from "express";
import phrasesMotivationControllers from "../controllers/phrasesMotivation.controllers";



const routes = Router();

routes.post("/" , phrasesMotivationControllers.create)


export { routes as motivationRoutes };