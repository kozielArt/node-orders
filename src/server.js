import express from 'express';
import routes from './api/routes';
import config from '../config.json';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/', routes);

const portNumber = config.portNumber;

const server = app.listen(config.port, () => {
  const { port } = server.address();
  console.log(`Tasks app running at localhost:${port}`);
});
