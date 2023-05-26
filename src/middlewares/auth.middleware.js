export function authenticationMiddleware(request, response, next) {
  const { authorization } = request.headers
  const usersPermitidos = ['token-do-caio', 'token-do-biel'];

  if(!authorization) {
    return response.status(400).send('Você precisa passar o header authorization');
  }

  if(!usersPermitidos.includes(authorization)) {
    return response.status(400).send('Você precisa ser um user permitido (caio, biel)');
  }
  next()
}