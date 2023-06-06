
import PhraseRepository from '../repositories/phrase.repository.js'

class PhraseService {
  async create({ phrase , priority }) {
    try {
      const phraseFound = await PhraseRepository.listByPhrase({ phrase })
      
      if(phraseFound) {
        throw new Error('Frase já existe!');
      }
    } catch (error) {
      throw error
    }

    return await PhraseRepository.create({ phrase , priority})
  }

  async list() {
    try {
      return await PhraseRepository.list()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  
  async listById({ phraseId }) {
   try {
    const exitPhrase = await PhraseRepository.listById({ phraseId: phraseId })

    if(!exitPhrase){
      throw new Error('frase não encontrado')
    }

    return {phrase: exitPhrase.phrase } 

   } catch (error) {
    throw error
    
   }
  }

  async update({ phrase, phraseId }) {
    try {
      const phraseExist = await PhraseRepository.listById({ phraseId });

      if(!phraseExist) {
        throw new Error('phrase não encontrada')
      }
      
      return await PhraseRepository.update({ phrase, phraseId })
    } catch (error) {
      throw error
    }

  }


 async deleteById({ phraseId }) {
    try {
    const exitPhrases = await PhraseRepository.listById({ phraseId })

      if(!exitPhrases){
        throw new Error('frase não encontrado')
     }
     
      return await PhraseRepository.delete({ phraseId })
    } catch (error) {
      throw error
    }
  }
}
export default new PhraseService();
