import { Router } from "express";

import { phrasesRoutes } from './phrases.routes.js';

const routes = Router();

routes.use('/phrase', phrasesRoutes);

export { routes };