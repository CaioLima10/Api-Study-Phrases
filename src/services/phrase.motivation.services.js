import MotivationRepository from '../repositories/phrases.motivation.repository'

class MotivationService{
    async create({ phraseMotivation }) {
        try {
          const phraseMotivationFound = await MotivationRepository.listByPhraseMotivation({ phraseMotivation })
          
          if(phraseMotivationFound) {
            throw new Error('Frase já existe!');
          }
          } catch (error) {
            throw error
          }
      
        return await MotivationRepository.create({ phraseMotivation })
    }

    async list() {
        try {
          return await MotivationRepository.list()
        } catch (error) {
          throw new Error(error.message)
        }
      }
}

export default new MotivationService()