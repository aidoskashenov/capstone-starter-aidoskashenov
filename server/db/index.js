import client from './client';

export const addUser = async (newUser) => {
  try {
    const insertRes = await client
      .db('capstone-logbook')
      .collection('users')
      .insertOne(newUser);
    return insertRes;
  } catch (err) {
    throw new Error(err);
  }
};
