import MotivationService from '../services/phrase.motivation.services'
class MotivationController {
  
async create(request, response) {
   try {
      const { phraseMotivation } = request.body;
      await MotivationService.create({ phraseMotivation });

      return response.status(201).send();

    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  async list(_request, response) {
    try {
      const result = await phraseMotivation.list();
  
      return response.json(result);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }  
}

export default new MotivationController();
