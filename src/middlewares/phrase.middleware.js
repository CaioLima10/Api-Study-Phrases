// Validate
export function validatePhraseMiddleware(request, response, next) {
  // Executar a lógica do middleware aqui

  const { phrase, priority } = request.body;

  if(!phrase) {
    return response.status(400).send('"phrase": é obrigatório')
  }

  if(!priority) {
    return response.status(400).send('"priority": é obrigatório')
  }

  if(priority !== "low" && priority !== "medium" && priority !== "high") {
    return response.status(400).send('priority é necessário ser low, medium ou high')
  }
  
  if(phrase.length < 3) {
    return response.status(400).send('"phrase" precisa ter no minimo 3 caracteres')
  }

  // Chamar a função next() para passar o controle para o próximo middleware
  next();
}

