import { Router } from "express";

import PhraseController from '../controllers/phrase.controller.js';
import { authenticationMiddleware, validatePhraseMiddleware } from '../middlewares/index.js';

const routes = Router();

routes.post('/', authenticationMiddleware, validatePhraseMiddleware, PhraseController.create);
routes.get('/', PhraseController.list);
routes.get('/:id', PhraseController.listById);
routes.put('/:id', validatePhraseMiddleware, PhraseController.updateById);
routes.delete('/:id', authenticationMiddleware, PhraseController.deleteById);

export { routes as phrasesRoutes };
