import { isObject } from '../types';
import { evaLightTheme as defaultTheme } from './themes/evaLightTheme';
import merge from 'lodash/merge';
import { isObjectEmpty } from '../utils';
import { getAllMappings } from './mapping/getAllMappings';

export const createTheme = (
  customTheme: unknown,
  parentTheme = defaultTheme
) => {
  if (isObjectEmpty(parentTheme)) parentTheme = defaultTheme;
  if (!isObject(parentTheme)) {
    throw new Error(`
      React-UI-Library: The second parameter in the function 'createTheme' must be an object.\n
    `);
  }
  let mergedTheme = merge(parentTheme, customTheme);
  mergedTheme.mappings = getAllMappings(mergedTheme);

  return mergedTheme;
};
