import { Router } from 'express';

import { addUser, loginUser } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>You are at travels Get!</h1>');
});

router.post('/add', async ({ body }, res) => {
  try {
    const dbRes = await addUser(body);
    res.status(201);
    res.send(dbRes);
  } catch (error) {
    error.message = 'Database error!';
    res.status(500).send(error);
  }
});

// router.post('/login', async ({ body }, res) => {
//   try {
//     const mongoRes = await loginUser(body);
//     console.log(mongoRes, 'mongoRes');
//     res.status(200);
//     res.send(mongoRes);
//   } catch (err) {
//     res.status(500);
//     res.json(err);
//   }
// });
export default router;
