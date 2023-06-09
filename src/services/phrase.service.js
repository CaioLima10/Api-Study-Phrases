import PhraseRepository from '../repositories/phrase.repository.js'

class PhraseService {
  async create({ phrase, priority }) {
    const phraseAlreadyFound = await PhraseRepository.sentenceAlreadyExists({ phrase })
  
    if(phraseAlreadyFound) {
      throw new Error('Frase já existe!');
    }

    return await PhraseRepository.create({ phrase, priority })
  }

  async list() {
    try {
      return await PhraseRepository.list();
    } catch (error) {
      throw error
    }
  }
  
  async listById({fraseId}) {
    try {
      const phraseExist = await PhraseRepository.listById({ phraseId: fraseId });

      if(!phraseExist) {
        throw new Error('phrase não encontrada')
      }

      return { phrase: phraseExist.phrase}
    } catch (error) {
      throw error
    }
  }

  async listByPriority({ priority }) {
    try {
      const phraseExist = await PhraseRepository.listByPriority({ priority });

      if(!phraseExist) {
        throw new Error('phrase não encontrada')
      }

      return { phrase: phraseExist}
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

  async delete({ phraseId }) {
    try {
      const phraseExist = await PhraseRepository.listById({ phraseId });

      if(!phraseExist) {
        throw new Error('phrase não encontrada')
      }

      return await PhraseRepository.delete({ phraseId});
    } catch (error) {
      throw error
    }
  }
}
export default new PhraseService();
