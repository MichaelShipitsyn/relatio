import { ThemeType } from '../../types';
import { StylesType } from '../../types';

export const SpinnerMapping = (theme: ThemeType): StylesType => {
  return {
    '&.Spinner': {
      label: 'spinner',
      display: 'block',
      borderStyle: 'solid',
      borderRadius: '50%',
      borderRightColor: 'transparent',
      boxSizing: 'border-box',
      //status
      '&[data-status="basic"]': {
        borderTopColor: theme.palette.basic[300],
        borderBottomColor: theme.palette.basic[300],
        borderLeftColor: theme.palette.basic[300],
      },
      '&[data-status="primary"]': {
        borderTopColor: theme.palette.primary[500],
        borderBottomColor: theme.palette.primary[500],
        borderLeftColor: theme.palette.primary[500],
      },
      '&[data-status="success"]': {
        borderTopColor: theme.palette.success[500],
        borderBottomColor: theme.palette.success[500],
        borderLeftColor: theme.palette.success[500],
      },
      '&[data-status="info"]': {
        borderTopColor: theme.palette.info[500],
        borderBottomColor: theme.palette.info[500],
        borderLeftColor: theme.palette.info[500],
      },
      '&[data-status="warning"]': {
        borderTopColor: theme.palette.warning[500],
        borderBottomColor: theme.palette.warning[500],
        borderLeftColor: theme.palette.warning[500],
      },
      '&[data-status="danger"]': {
        borderTopColor: theme.palette.danger[500],
        borderBottomColor: theme.palette.danger[500],
        borderLeftColor: theme.palette.danger[500],
      },
      '&[data-status="control"]': {
        borderTopColor: theme.palette.basic[100],
        borderBottomColor: theme.palette.basic[100],
        borderLeftColor: theme.palette.basic[100],
      },
      //size
      '&[data-size="tiny"]': {
        width: 16,
        height: 16,
        borderWidth: 2.3,
      },
      '&[data-size="small"]': {
        width: 20,
        height: 20,
        borderWidth: 2.8,
      },
      '&[data-size="medium"]': {
        width: 24,
        height: 24,
        borderWidth: 3.4,
      },
      '&[data-size="large"]': {
        width: 28,
        height: 28,
        borderWidth: 3.9,
      },
      '&[data-size="giant"]': {
        width: 32,
        height: 32,
        borderWidth: 4.5,
      },
    },
  };
};
