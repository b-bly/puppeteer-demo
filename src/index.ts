import express from 'express';
import { listenForMessages } from './pubService';

const app = express();
// TODO: Set as env
const port = 8080;

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

listenForMessages('puppeteer-sub')
