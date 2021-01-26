import { ThemeType } from '../../types';
import { StylesType } from '../../types';

export const TextFieldMapping = (theme: ThemeType): StylesType => {
  return {
    '&.TextField': {
      color: theme.palette.basic[600],
      fontFamily: theme.typography.fontFamily,
      '.TextField__Label': {
        fontSize: '12px',
        fontWeight: 'bold',
        marginBottom: '4px',
        display: 'block',
        userSelect: 'none',
      },
      '.TextField__HelperText': {
        fontSize: '12px',
        userSelect: 'none',
      },
      '.TextField__Input::placeholder': {
        color: theme.palette.basic[600],
      },
      '.TextField__Input': {
        fontFamily: theme.typography.fontFamily,
        width: '100%',
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius,
        borderWidth: theme.shape.borderWidth,
        '&:focus': {
          outline: 'none',
        },
      },

      '&[data-status="basic"]': {
        '.TextField__Input': {
          borderColor: theme.palette.basic[400],
          backgroundColor: theme.palette.basic[200],
          '&:focus': {
            borderColor: theme.palette.primary[500],
            backgroundColor: theme.palette.basic[100],
          },
        },
      },
      '&[data-status="primary"]': {
        '.TextField__Input': {
          borderColor: theme.palette.primary[500],
          backgroundColor: theme.palette.basic[200],
          '&:focus': {
            borderColor: theme.palette.primary[600],
            backgroundColor: theme.palette.basic[100],
          },
        },
      },
      '&[data-status="success"]': {
        '.TextField__Input': {
          borderColor: theme.palette.success[500],
          backgroundColor: theme.palette.basic[200],
          '&:focus': {
            borderColor: theme.palette.success[600],
            backgroundColor: theme.palette.basic[100],
          },
        },
      },
      '&[data-status="info"]': {
        '.TextField__Input': {
          borderColor: theme.palette.info[500],
          backgroundColor: theme.palette.basic[200],
          '&:focus': {
            borderColor: theme.palette.info[600],
            backgroundColor: theme.palette.basic[100],
          },
        },
      },
      '&[data-status="warning"]': {
        '.TextField__Input': {
          borderColor: theme.palette.info[500],
          backgroundColor: theme.palette.basic[200],
          '&:focus': {
            borderColor: theme.palette.info[600],
            backgroundColor: theme.palette.basic[100],
          },
        },
      },
      '&[data-disabled="true"]': {
        '.TextField__Input': {
          borderColor: theme.palette.basic[400],
          backgroundColor: theme.palette.basic[200],
          color: theme.palette.basic.transparent[600],
        },
        '.TextField__Label': {
          color: theme.palette.basic.transparent[600],
        },
        '.TextField__HelperText': {
          color: theme.palette.basic.transparent[600],
        },
        '.TextField__Input::placeholder': {
          color: theme.palette.basic.transparent[600],
        },
      },
      '&[data-status="danger"]': {
        '.TextField__Input': {
          borderColor: theme.palette.info[500],
          backgroundColor: theme.palette.basic[200],
          '&:focus': {
            borderColor: theme.palette.info[600],
            backgroundColor: theme.palette.basic[100],
          },
        },
      },
      '&[data-size="small"]': {
        '.TextField__Input': {
          fontSize: '13px',
          minHeight: '32px',
          padding: '3px 8px',
        },
      },
      '&[data-size="medium"]': {
        '.TextField__Input': {
          fontSize: '15px',
          minHeight: '40px',
          padding: '7px 8px',
        },
      },
      '&[data-size="large"]': {
        '.TextField__Input': {
          fontSize: '15px',
          minHeight: '48px',
          padding: '11px 8px',
        },
      },
    },
  };
};
