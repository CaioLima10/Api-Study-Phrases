import MotivationPhrasesRepository from '../repositories/motivationRepository.js'

class MotivationPhrasesService {
  async create({ motivationalPhrase }) {
    try {
      const existsPhraseMotivation = await MotivationPhrasesRepository.listByMotivationPhrase({ motivationalPhrase })

      if (existsPhraseMotivation) {
        throw new Error('Frase já existe')
      }
      return await MotivationPhrasesRepository.create({ motivationalPhrase })
      
    } catch (error) {
      throw error
    }
  }

  async list() {
    try {
      const motivationalPhrases = await MotivationPhrasesRepository.list()

      return motivationalPhrases
      
    } catch (error) {
      throw error
    }
  }
}

export default new MotivationPhrasesService();