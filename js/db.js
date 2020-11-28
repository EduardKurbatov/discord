import { STORAGE } from './storage.js';

const DB_NAME = 'users';
const USERS = STORAGE.getValue(DB_NAME) || [];

/**
 * Create new user and add it "DB"
 * @param {{name: string, email: string, password: string, avatar: string}} userData `{name, email, password, avatar}` data of the user
 * @param {function():{success: boolean, message: string}} cb callback function that returns opertaion status (`{message: string, success: boolean}`)
 */
function createUser({ name, email, password, avatar }, cb) {
  const isDataValid = () =>
    typeof name === 'string' &&
    typeof email === 'string' &&
    typeof password === 'string' &&
    typeof avatar === 'string';
  const callback = {
    success: (message) => {
      cb && cb({ success: true, message });
    },
    error: (message) => {
      cb && cb({ success: false, message });
    },
  };

  if (isDataValid()) {
    if (!checkIfUserExists(email)) {
      USERS.push({
        name,
        email,
        password,
        avatar,
      });
      STORAGE.setValue(DB_NAME, USERS);
      callback.success('User successfuly created');
    } else {
      callback.error('User already exists');
    }
  } else {
    callback.error('Wrong data format when creating user');
  }
}

/**
 * Check if user exists in "DB"
 * @param { string } email email of a potential user
 * @returns { boolean }
 */
function checkIfUserExists(email) {
  return !!USERS.find((user) => user.email === email);
}

/**
 * Gets user data from "DB"
 * @param {{email: string, password: string}} userData `{email, password}`: email and password of a potential user
 * @returns {object | undefined} `user data` if user exists and `undefined` if not
 */
function getUserFromDB({ email, password }) {
  return USERS.find(
    (user) => user.email === email && user.password === password
  );
}

export { createUser, getUserFromDB, USERS };
