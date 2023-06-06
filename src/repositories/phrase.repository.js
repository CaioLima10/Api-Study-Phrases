import sqlite3 from 'sqlite3';
import { randomUUID } from 'crypto';
import path from 'path';


const dbPath = path.resolve(new URL (import.meta.url).pathname, '..' , 'phrases.db');


class PhraseRepository {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  async create({ phrase, priority }) {
    return new Promise((resolve , reject) => {

      const id = randomUUID();

      this.db.run('INSERT INTO phrases VALUES(?, ?, ?)', [ id , phrase, priority ], (err) => {
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

  async update({ phrase, phraseId }) {
    return new Promise((resolve, reject ) => {
      this.db.run('UPDATE phrases SET phrase = ? WHERE "id"=?', [phrase, phraseId], (err, row) => {
        if (err) {
          reject(err)
        } else {
          resolve(row);
        }
      })
    })
  }
  
  async delete({phraseId}){
    return new Promise((resolve , reject) => {
      this.db.run('DELETE FROM phrases WHERE id = ?' , phraseId, (err , row) => {

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