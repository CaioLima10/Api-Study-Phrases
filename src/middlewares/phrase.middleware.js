
export function validatePhraseMiddleware(request, response, next) {
  const { phrase, priority } = request.body;

  if (!priority) {
    return response.status(400).send('"priority" é obrigatório');
  }

  if (!['low', 'medium', 'high'].includes(priority)) {
    return response.status(400).send('"priority" precisa ser "low", "medium" ou "high"');
  }

  if (request.method === 'POST' && (!phrase || phrase.length < 3)) {
    return response.status(400).send('"phrase" é obrigatório e precisa ter no mínimo 3 caracteres');
  }

  next();
}
