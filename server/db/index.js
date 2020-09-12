import client from './client';

export const addUser = async (newUser) => {
  try {
    return await client
      .db('capstone-logbook')
      .collection('users')
      .insertOne(newUser);
  } catch (err) {
    // Throw back any other errors
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
export const addDailylog = async (newDailylog) => {
  try {
    return await client
      .db('capstone-logbook')
      .collection('dailylog')
      .insertOne(newDailylog);
  } catch (err) {
    throw new Error(err);
  }
};

export const getDailyLog = async () => {
  try {
    return await client
      .db('capstone-logbook')
      .collection('dailylog')
      .find()
      .toArray();
  } catch {
    throw new Error(err);
  }
};
