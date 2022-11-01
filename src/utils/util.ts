import { SECRET_SALT } from '@/config';
import { hash } from 'bcrypt';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

/**
 * It takes a password and a pepper, concatenates them, hashes them, and returns the hash
 * @param {string} password - The password to hash
 * @param [pepper] - This is a secret string that is added to the password before hashing. This is used
 * to make it harder for attackers to crack the password.
 * @returns A hashed password
 */
export async function hashPassword(password: string, pepper = ''): Promise<string> {
  const hased = await hash(pepper + password, parseInt(SECRET_SALT || '10'));
  return hased;
}
