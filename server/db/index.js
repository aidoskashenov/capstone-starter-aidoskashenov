import client from './client';

export const addUser = async (newUser) => {
  try {
    const { email } = newUser;
    const existingUser = await client
      .db('capstone-logbook')
      .collection('users')
      .findOne({ email });
    if (!existingUser) {
      return await client
        .db('capstone-logbook')
        .collection('users')
        .insertOne(newUser);
    }
    throw new Error('User Already exists');
  } catch (err) {
    throw new Error(err);
  }
};

export const getUser = async (uid) => {
  try {
    return await client.db('capstone-logbook').collection('users').findOne(uid);
  } catch (err) {
    throw new Error(err);
  }
};
export const loginUser = async (creds) => {
  console.log(creds, 'creds');
  try {
    return await client
      .db('capstone-logbook')
      .collection('users')
      .findOne(creds);
  } catch (err) {
    throw new Error(err);
  }
};
