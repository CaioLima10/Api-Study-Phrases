import sqlite3 from 'sqlite3';
import path from 'path';
import { randomUUID } from 'crypto';

const dbPath = path.resolve(new URL(import.meta.url).pathname, '../phrasesMotivation.db');

class MotivationalPhrasesRepository {
  constructor() {
    this.db = new sqlite3.Database(dbPath);
  }

  async create({ motivationPhrase }) {
    return new Promise((resolve , reject) => {

      const id = randomUUID();

      this.db.run('INSERT INTO motivationPhrases VALUES(?, ?)', [id, motivationPhrase], (err) => {
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
      this.db.all('SELECT * FROM motivationPhrases', (err, rows) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
      })
    })
  }

  async listByMotivationPhrase({ motivationPhrase }) {
    return new Promise((resolve, reject) => {

      this.db.get('SELECT * FROM motivationalPhrases WHERE phrase = ?', motivationPhrase, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
      
    });
  }
  
}

export default new MotivationalPhrasesRepository();