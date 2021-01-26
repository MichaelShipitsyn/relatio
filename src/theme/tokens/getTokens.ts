import { shadows } from './shadows';
import { shape } from './shape';
import { spacing } from './spacing';
import { typography } from './typography';
import { sizes } from './sizes';

export const getTokens = () => {
  return {
    shadows,
    sizes,
    shape,
    spacing,
    typography,
  };
};
