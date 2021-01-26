import React, { FC } from 'react';
import { ThemeType } from './types';
import { ThemeContext } from './ThemeContext';

type Props = {
  theme: ThemeType;
};

export const ThemeProvider: FC<Props> = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
