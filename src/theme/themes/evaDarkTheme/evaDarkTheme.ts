import { ThemeType } from '../../types';
import { palette } from './palette';
import { getTokens } from '../../tokens/getTokens';
import { getAllMappings } from '../../mapping/getAllMappings';

const theme: ThemeType = {
  palette,
  mappings: {},
  overrides: {},
  ...getTokens(),
};

const mappings = getAllMappings(theme);

export const evaDarkTheme: ThemeType = {
  ...theme,
  mappings,
};
