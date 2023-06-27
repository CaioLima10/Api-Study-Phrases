import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes/index.js';
import cors from 'cors';

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/', routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Rodando na http://localhost:${port}`) 
})
