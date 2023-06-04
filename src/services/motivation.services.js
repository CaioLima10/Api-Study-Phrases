import phrasesMotivation from "../repositories/phrases.motivation"

class MotivationService{
    async create({ motivation }) {
        try {
          const phraseMotivationEncontrada = await phrasesMotivation.listByPhraseMotivation({ motivation })
          
          if(phraseMotivationEncontrada) {
            throw new Error('Frase já existe!');
          }
        } catch (error) {
          throw error
        }
    
        return await phrasesMotivation.create({ motivation })
    }

    async list() {
        try {
          return await phrasesMotivation.list()
        } catch (error) {
          throw new Error(error.message)
        }
      }
}

export default new MotivationService()