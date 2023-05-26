import sqlite3 from 'sqlite3';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);

const dbPath = path.resolve(__filename ,'..', 'phrases.db')

class PhraseRepository {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  async create({ phrase }) {
    return new Promise((resolve , reject) => {

      const id = randomUUID();

      this.db.run('INSERT INTO phrases VALUES(?, ?)', [id, phrase], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
  
    })
  }

  async list() {
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM phrases', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  async listById({ phraseId }) {
    return new Promise((resolve, reject) => {

      this.db.get('SELECT * FROM phrases WHERE id = ?', phraseId, (err, row) => {
        if (err) {
          reject(err);
        } else if(!row ){
          reject({ message: 'phrase não encontrada'});
        } else {
          resolve(row);
        }
      });
      
    });
  }
  async listByPhrase({ phrase }) {
    return new Promise((resolve, reject) => {

      this.db.get('SELECT * FROM phrases WHERE phrase = ?', phrase, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
      
    });
  }

  updateById(phrase , phraseId){
    return new Promise((resolve , reject) => {
      this.db.update('SELECT phrases SET name = "?" WHERE id = ?', phrase , phraseId, (err , row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      })
    })
  }
  
  deleteById(phraseId){
    return new Promise((resolve , reject) => {
      this.db.delete('DELETE FROM phrases WHERE id = ?' , phraseId, (err , row) => {

        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      })
    })
  }
}

export default new PhraseRepository()