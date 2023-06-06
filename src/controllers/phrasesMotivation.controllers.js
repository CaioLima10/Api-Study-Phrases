import motivationServices from "../services/phrase.motivation.services";


class MotivationControllers {

async create(request, response) {
  try {
      const { phraseMotivation } = request.body;
      await motivationServices.create({ phraseMotivation });

      return response.status(201).send();

    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }
  
async list(_request, response) {
    try {
      const result = await motivationServices.list();
  
      return response.json(result);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
}  

}

export default new MotivationControllers()