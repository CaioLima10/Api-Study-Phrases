import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);

const dbPath = path.resolve(__filename ,'..', 'motivation.db')

class PhrasesMotivation {
    constructor(){
      this.db  = new sqlite3.Database(dbPath) 
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
}

export default new PhrasesMotivation()