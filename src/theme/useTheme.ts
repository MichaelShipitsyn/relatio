import React from 'react';
import { ThemeContext } from './ThemeContext';
import { ThemeType } from './types';

export const useTheme = () => {
  return React.useContext(ThemeContext) as ThemeType;
};
