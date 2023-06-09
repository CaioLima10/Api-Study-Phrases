import MotivationalPhrasesRepository from '../repositories/motivationRepository.js'

class MotivationalPhrasesService {
  async create({ motivationalPhrase }) {
    try {
      const existsPhraseMotivation = await MotivationalPhrasesRepository.listByMotivationPhrase({ motivationalPhrase })
      
      if (existsPhraseMotivation) {
        throw new Error('Frase já existe')
      }      
      return await MotivationalPhrasesRepository.create({ motivationalPhrase })
    } catch (error) {
      throw error
    }
  }

  async list() {
    try {
      const motivationalPhrases = await motivationalPhraseRepository.list()

      return motivationalPhrases
    } catch (error) {
      throw error
    }
  }
}

export default new MotivationalPhrasesService();