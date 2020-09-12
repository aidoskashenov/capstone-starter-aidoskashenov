import { Router } from 'express';

import { addDailylog, getDailyLog } from '../db';

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

router.get('/', async (_, res) => {
  try {
    const mongoRes = await getDailyLog();
    if (!mongoRes) {
      throw new Error('Log not found!');
    }
    res.status(200);
    res.json(mongoRes);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

export default router;
