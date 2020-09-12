import { Router } from 'express';

import { addDailylog } from '../db';

const router = new Router();

router.post('/', async ({ body }, res) => {
  try {
    const mongoRes = await addDailylog(body);
    res.status(201);
    res.json(mongoRes);
  } catch (err) {
    res.status(500);
    console.error(err);
  }
});

export default router;
