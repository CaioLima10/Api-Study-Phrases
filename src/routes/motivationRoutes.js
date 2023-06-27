import { Router } from "express";

import MotivationPhrasesController from '../controllers/motivationController.js';
import { validateMotivationalPhraseMiddleware } from '../middlewares/index.js'

const routes = Router();

routes.post('/', validateMotivationalPhraseMiddleware, MotivationPhrasesController.create)
routes.get('/', MotivationPhrasesController.list)

export { routes as MotivationRoutes}