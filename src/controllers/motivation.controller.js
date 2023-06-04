import motivationServices from "../services/motivation.services";


class MotivationController{
    async list(_request, response) {
        try {
          const result = await motivationServices.list();
      
          return response.json(result);
         } catch (error) {
          return response.status(404).json({ message: error.message });
         }
      }  
}

export default new MotivationController();