import { Router } from "express";

import { phrasesRoutes } from './phrases.routes.js';
import {motivationPhrasesRoutes }from './motivation.routes.js'

const routes = Router();

routes.use('/phrase', phrasesRoutes);
routes.use('/phrasesMotivation' , motivationPhrasesRoutes)

export { routes };