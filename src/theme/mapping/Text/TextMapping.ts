import { ThemeType } from '../../types';
import { StylesType } from '../../types';

export const TextMapping = (theme: ThemeType): StylesType => {
  return {
    '&.Text': {
      fontFamily: theme.typography.h1.fontFamily || theme.typography.fontFamily,
      '&[data-variant="h1"]': {
        fontSize: theme.typography.h1.fontSize,
        fontWeight: theme.typography.h1.fontWeight,
        lineHeight: theme.typography.h1.lineHeight,
        fontFamily:
          theme.typography.h1.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="h2"]': {
        fontSize: theme.typography.h2.fontSize,
        fontWeight: theme.typography.h2.fontWeight,
        lineHeight: theme.typography.h2.lineHeight,
        fontFamily:
          theme.typography.h2.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="h3"]': {
        fontSize: theme.typography.h3.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        lineHeight: theme.typography.h3.lineHeight,
        fontFamily:
          theme.typography.h3.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="h4"]': {
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        lineHeight: theme.typography.h4.lineHeight,
        fontFamily:
          theme.typography.h4.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="h5"]': {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h5.fontWeight,
        lineHeight: theme.typography.h5.lineHeight,
        fontFamily:
          theme.typography.h5.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="h6"]': {
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        lineHeight: theme.typography.h6.lineHeight,
        fontFamily:
          theme.typography.h6.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="s1"]': {
        fontSize: theme.typography.s1.fontSize,
        fontWeight: theme.typography.s1.fontWeight,
        lineHeight: theme.typography.s1.lineHeight,
        fontFamily:
          theme.typography.s1.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="s2"]': {
        fontSize: theme.typography.s2.fontSize,
        fontWeight: theme.typography.s2.fontWeight,
        lineHeight: theme.typography.s2.lineHeight,
        fontFamily:
          theme.typography.s2.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="p1"]': {
        fontSize: theme.typography.p1.fontSize,
        fontWeight: theme.typography.p1.fontWeight,
        lineHeight: theme.typography.p1.lineHeight,
        fontFamily:
          theme.typography.p1.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="p2"]': {
        fontSize: theme.typography.p2.fontSize,
        fontWeight: theme.typography.p2.fontWeight,
        lineHeight: theme.typography.p2.lineHeight,
        fontFamily:
          theme.typography.p2.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="c1"]': {
        fontSize: theme.typography.c1.fontSize,
        fontWeight: theme.typography.c1.fontWeight,
        lineHeight: theme.typography.c1.lineHeight,
        fontFamily:
          theme.typography.c1.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="c2"]': {
        fontSize: theme.typography.c2.fontSize,
        fontWeight: theme.typography.c2.fontWeight,
        lineHeight: theme.typography.c2.lineHeight,
        fontFamily:
          theme.typography.c2.fontFamily || theme.typography.fontFamily,
      },
      '&[data-variant="label"]': {
        fontSize: theme.typography.label.fontSize,
        fontWeight: theme.typography.label.fontWeight,
        lineHeight: theme.typography.label.lineHeight,
        fontFamily:
          theme.typography.label.fontFamily || theme.typography.fontFamily,
      },
      '&[data-color="basic"]': {
        color: theme.palette.basic[800],
      },
      '&[data-color="primary"]': {
        color: theme.palette.primary[500],
      },
      '&[data-color="success"]': {
        color: theme.palette.success[500],
      },
      '&[data-color="info"]': {
        color: theme.palette.info[500],
      },
      '&[data-color="warning"]': {
        color: theme.palette.warning[500],
      },
      '&[data-color="danger"]': {
        color: theme.palette.danger[500],
      },
    },
  };
};
