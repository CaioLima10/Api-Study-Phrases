import sqlite3 from 'sqlite3';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);

const dbPath = path.resolve(__filename ,'..', 'motivation.db')