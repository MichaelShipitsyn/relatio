import { isObject } from '../types';

export const isObjectEmpty = (obj: unknown) => {
  if (isObject(obj)) {
    return Object.keys(obj).length === 0;
  }
  throw new Error(`${obj} is not an object`);
};
