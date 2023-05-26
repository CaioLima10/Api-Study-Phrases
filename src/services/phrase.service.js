
import { frasesDB } from '../db/index.js';
import PhraseRepository from '../repositories/phrase.repository.js'

class PhraseService {
  async create({ phrase }) {
    const phraseEncontrada = await PhraseRepository.listByPhrase({ phrase })
  
    if(phraseEncontrada) {
      throw new Error('Frase já existe!');
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

  
  async listById({fraseId}) {
    try {
      const result = await PhraseRepository.listById({ phraseId: fraseId })
  
      return { phrase: result.phrase}
    
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateById({ fraseId }) {
   
     try {
       const result = await PhraseRepository.updateById({ phraseId: fraseId })
       result === -1
       frasesDB[result].phrase = fraseId;
      
    }
      catch (error) {
      throw new Error(error.message)
    }
  }
 async deleteById({ fraseId }) {
    try {
      const result = await PhraseRepository.deleteById({ phraseId: fraseId })
      result === -1
      frasesDB.splice(PhraseRepository, 1);

    } catch (error) {
        throw new Error(error.message)
    }
  }
}
export default new PhraseService();
