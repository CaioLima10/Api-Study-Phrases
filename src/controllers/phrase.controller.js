import PhraseService from '../services/phrase.service.js';
class PhraseController {
  
 async create(request, response) {
    const { phrase } = request.body;
    try {
      await PhraseService.create({ phrase });
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  async list(_request, response) {
    try {
      const result = await PhraseService.list();
  
      return response.json(result);
     } catch (error) {
      return response.status(404).json({ message: error.message });
     }
  }  

  async listById(request, response) {
   try {
    const result = await PhraseService.listById({
      fraseId: request.params.id
    });

    return response.json(result);
   } catch (error) {
    return response.status(404).json({ message: error.message });
   }
  }

  updateById(request, response){
    const result = PhraseService.update({
      phraseId: request.params.id,
      phrase: request.body.phrase,
    })

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }
    // 204 não envia nada para a response
    return response.status(204).send()
  }

  deleteById(request, response) {
    const result = PhraseService.delete({
      phraseId: request.params.id
    });

    if(result?.isError) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(204).send()
  }
}

export default new PhraseController();
