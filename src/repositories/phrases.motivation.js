import sqlite3 from 'sqlite3';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);

const dbPath = path.resolve(__filename ,'..', 'motivation.db')

class PhrasesMotivation {
    constructor(){
      this.db  = new sqlite3.Database(dbPath) 
    }

create({  motivation  }){
    return new Promise((reject , resolve) => {

        const id = randomUUID();

        this.db.run('INSERT INTO phrasesMotivation VALUES(?, ?)' [id , motivation], (err) => {
            if(err){
                reject(err)
            }else{
                resolve(id)
            }
        })
    })
}

async listByPhraseMotivation({ motivation }) {
    return new Promise((resolve, reject) => {

      this.db.get('SELECT * FROM phrases WHERE phrase = ?', motivation, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
      
    });
  }


 async list() {
    return new Promise((resolve, reject) => {
      this.db.run('SELECT * FROM phrases', (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default new PhrasesMotivation()