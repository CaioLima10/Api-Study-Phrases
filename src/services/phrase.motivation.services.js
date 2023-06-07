import MotivationRepository from '../repositories/phrases.motivation.repository.js'

class MotivationService{
    async create({ phraseMotivation }) {
        try {
          const phraseMotivationFound = await MotivationRepository.listByPhraseMotivation({ phraseMotivation })
          
          if(phraseMotivationFound) {
            throw new Error('Frase já existe!');
          }
          return await MotivationRepository.create({ phraseMotivation })

          } catch (error) {
            throw error
          }
      
    }

    async list() {
        try {
          await MotivationRepository.list()

        } catch (error) {
          throw new Error(error.message)
        }
      }
}

export default new MotivationService()