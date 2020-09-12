import express from 'express';

import cors from 'cors';

import dotenv from 'dotenv';

import users from './routes/users';
import dailylog from './routes/dailylog';

dotenv.config();

const app = express();

app.get('/', (_, res) => {
  res.send('<h1>Hello from Express</h1>');
});

app.use(cors());
app.use(express.json());

app.use('/users', users);
app.use('/dailylog', dailylog);

app.listen(process.env.PORT, () => {
  console.log('server is running');
});
