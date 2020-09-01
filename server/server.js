import cors from 'cors';

import users from './routes/users';

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send('<h1>Hello from Express</h1>');
});

app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);
app.use(express.json());

app.use('/users', users);

app.use((_, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Wistening at: http://localhost:${port}`);
});
