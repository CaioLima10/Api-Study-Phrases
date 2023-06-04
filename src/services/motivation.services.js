import phrasesMotivation from "../repositories/phrases.motivation"

class MotivationService{
    async list() {
        try {
          return await phrasesMotivation.list()
        } catch (error) {
          throw new Error(error.message)
        }
      }
}

export default new MotivationService()