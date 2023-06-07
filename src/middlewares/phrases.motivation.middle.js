export function validateMotivationalMiddleware(request, response, next) {

  const { motivationPhrase } = request.body;
  
  if(!motivationPhrase) {
    return response.status(400).send('"motivationalPhrase": é obrigatório')
  }
  
  next();
    }