import sqlite3 from 'sqlite3';
import { randomUUID } from 'crypto';
import path from 'path';


const dbPath = path.resolve(new URL (import.meta.url).pathname, '../phrases.motivation.db');

class MotivationRepository{
  constructor(){
    this.db = new sqlite3.Database(dbPath);
  }

create({ phraseMotivation }) {
  return new Promise((reject , resolve) => {
    const id = randomUUID();

    this.db.run('INSERT INTO phrasesMotivation VALUES(?, ?)', [ id , phraseMotivation ], (err) => {
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
    this.db.all('SELECT * FROM phrasesMotivation', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

async listByPhraseMotivation({ phraseMotivation }) {
  return new Promise((resolve, reject) => {

    this.db.get('SELECT * FROM phrasesMotivation WHERE phrase = ?', phraseMotivation , (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
    
  });
}

}

export default new MotivationRepository()