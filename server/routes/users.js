import { Router } from 'express';

import { addUser } from 'db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>You are at travels Get!</h1>');
});

router.post('/add', async ({ body }, res) => {
  try {
    const dbRes = await addUser(body);
    res.status(201);
    res.json(dbRes);
  } catch (error) {
    error.message = 'Database error!';
    res.status(500).send(error);
  }
});

export default router;
