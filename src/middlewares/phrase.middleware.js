// Validate
export function validatePhraseMiddleware(request, response, next) {
  // Executar a lógica do middleware aqui

  const { phrase } = request.body;

  if(!phrase) {
    return response.status(400).send('"phrase": é obrigatório')
  }
  
  if(phrase.length < 3) {
    return response.status(400).send('"phrase" precisa ter no minimo 3 caracteres')
  }

  // Chamar a função next() para passar o controle para o próximo middleware
  next();
}

