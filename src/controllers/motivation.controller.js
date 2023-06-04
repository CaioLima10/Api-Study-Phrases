import motivationServices from "../services/motivation.services";


class MotivationController{

    async create(request, response) {
        try {
           const { motivation } = request.body;
           await motivationServices.create({ motivation });
     
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

export default new MotivationController();