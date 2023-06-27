import PhraseService from '../services/phrase.service.js';
class PhraseController {

  async create(request, response) {
    try {
        const { phrase, priority } = request.body;
        await PhraseService.create({ phrase, priority });
        
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

  async listByPriority(request, response) {
    try {
      const result = await PhraseService.listByPriority({
        priority: request.params.id
      });

      return response.json(result);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
    }

    async updateById(request, response) {
      try {
        const { id: phraseId } = request.params;
      const { phrase, priority } = request.body;

      
      await PhraseService.update({ phraseId, phrase, priority });
      
  return response.status(204).send();
} catch (error) {
  return response.status(400).json({ message: error.message });
}
}

  async deleteById(request, response) {
    try {
      await PhraseService.delete({
        phraseId: request.params.id
      });

      return response.status(204).send()
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}


export default new PhraseController();