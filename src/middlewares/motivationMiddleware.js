export function validateMotivationalPhraseMiddleware(request, response, next) {
  
  const { motivationPhrase } = request.body;

  if(!motivationPhrase) {
    return response.status(400).send(' é obrigatório ter frase motivacional')
  }

  next();
  }