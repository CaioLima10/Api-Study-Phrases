import MotivationPhrasesService from '../services/motivationService.js';

class MotivationPhrasesController {
  
  async create(request, response) {
    try {
      const { motivationPhrase } = request.body;
      await MotivationPhrasesService.create({ motivationPhrase })
      
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  async list(_request, response) {
    try {
      const result = await MotivationPhrasesService.list();
  
      return response.json(result);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }
}

export default new MotivationPhrasesController();