import client from './client';

export const addUser = async (newUser) => {
  try {
    const { email } = newUser;
    const existingUser = await client
      .db('capstone-logbook')
      .collection('users')
      .findOne({ email });
    if (!existingUser) {
      return await client.db('capstone-logbook').collection('users').insertOne(newUser);
    }
    throw new Error('User Already exists');
  } catch (err) {
    throw new Error(err);
  }
};
