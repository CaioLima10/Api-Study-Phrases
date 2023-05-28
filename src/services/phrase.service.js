
import PhraseRepository from '../repositories/phrase.repository.js'

class PhraseService {
  async create({ phrase }) {
    try {
      const phraseEncontrada = await PhraseRepository.listByPhrase({ phrase })
      
      if(phraseEncontrada) {
        throw new Error('Frase já existe!');
      }
    } catch (error) {
      throw error
    }

    return await PhraseRepository.create({ phrase })
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

  async update({ phrases , phraseId }) {
   try {
    const exitPhrases = await PhraseRepository.listById({ phraseId })

    if(!exitPhrases){
       throw new Error('frase não encontrado')
    }
    
    return await PhraseRepository.update({ phrases , phraseId })

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
