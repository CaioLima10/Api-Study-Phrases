import { Router } from "express";

import { phrasesRoutes } from './phrases.routes.js';
import { MotivationRoutes } from './motivationRoutes.js'

const routes = Router();

routes.use('/phrase', phrasesRoutes);
routes.use('/motivationPhrases', MotivationRoutes)

export { routes };