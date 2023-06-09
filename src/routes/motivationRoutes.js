import { Router } from "express";
import MotivationalPhrasesController from '../controllers/motivationController.js';
import { validateMotivationalPhraseMiddleware } from '../middlewares/index.js'

const routes = Router();

routes.post('/', validateMotivationalPhraseMiddleware, MotivationalPhrasesController.create)
routes.get('/', MotivationalPhrasesController.list)

export { routes as MotivationRoutes}