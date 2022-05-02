/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { myLib } from '@express/my-lib';
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  myLib();
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
