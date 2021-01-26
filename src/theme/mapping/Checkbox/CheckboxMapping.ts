import { ThemeType } from '../../types';
import { StylesType } from '../../types';

export const CheckboxMapping = (theme: ThemeType): StylesType => {
  return {
    '&.Checkbox': {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      color: theme.palette.basic[800],
      '&[data-disabled="true"]': {
        cursor: 'default',
        color: theme.palette.basic.transparent[600],
      },
      '.Checkbox__Label': {
        fontFamily: theme.typography.fontFamily,
        fontSize: '13px',
        fontWeight: 600,
        marginLeft: '9px',
        userSelect: 'none',
      },
      '.Checkbox__Control': {
        borderWidth: theme.shape.borderWidth,
        borderStyle: 'solid',
        borderRadius: '3px',
        height: '18px',
        width: '18px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      },
      '.Checkbox__Icon': {
        width: '8px',
        fill: 'transparent',
      },
      '&[data-checked="true"]': {
        '.Checkbox__Icon': {
          fill: '#fff',
        },
      },
      '&[data-status="basic"]': {
        color: 'text-basic-color',
        '.Checkbox__Control': {
          borderColor: theme.palette.basic[600],
          backgroundColor: theme.palette.basic.transparent[100],
        },
        '&[data-checked="true"]': {
          '.Checkbox__Control': {
            borderColor: theme.palette.primary[500],
            backgroundColor: theme.palette.primary[500],
          },
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[700],
              backgroundColor: theme.palette.primary[600],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[400],
              backgroundColor: theme.palette.primary[400],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[600],
              backgroundColor: theme.palette.primary[600],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[600],
              backgroundColor: theme.palette.basic.transparent[600],
            },
          },
        },
        '&[data-checked="false"]': {
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[500],
              backgroundColor: theme.palette.primary.transparent[300],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[500],
              backgroundColor: theme.palette.primary.transparent[200],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[500],
              backgroundColor: theme.palette.primary.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[300],
              backgroundColor: theme.palette.basic.transparent[200],
            },
          },
        },
      },
      '&[data-status="primary"]': {
        '.Checkbox__Control': {
          borderColor: theme.palette.primary[500],
          backgroundColor: theme.palette.primary.transparent[500],
        },
        '&[data-checked="true"]': {
          '.Checkbox__Control': {
            borderColor: theme.palette.primary[500],
            backgroundColor: theme.palette.primary[500],
          },
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[700],
              backgroundColor: theme.palette.primary[600],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[400],
              backgroundColor: theme.palette.primary[400],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[600],
              backgroundColor: theme.palette.primary[600],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[600],
              backgroundColor: theme.palette.basic.transparent[600],
            },
          },
        },
        '&[data-checked="false"]': {
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[500],
              backgroundColor: theme.palette.primary.transparent[300],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[500],
              backgroundColor: theme.palette.primary.transparent[200],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.primary[500],
              backgroundColor: theme.palette.primary.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[300],
              backgroundColor: theme.palette.basic.transparent[200],
            },
          },
        },
      },
      '&[data-status="success"]': {
        '.Checkbox__Control': {
          borderColor: theme.palette.success[500],
          backgroundColor: theme.palette.success.transparent[100],
        },
        '&[data-checked="true"]': {
          '.Checkbox__Control': {
            borderColor: theme.palette.success[500],
            backgroundColor: theme.palette.success[500],
          },
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.success[700],
              backgroundColor: theme.palette.success[600],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.success[400],
              backgroundColor: theme.palette.success[400],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.success[600],
              backgroundColor: theme.palette.success[600],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[600],
              backgroundColor: theme.palette.basic.transparent[600],
            },
          },
        },
        '&[data-checked="false"]': {
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.success[500],
              backgroundColor: theme.palette.success.transparent[300],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.success[500],
              backgroundColor: theme.palette.success.transparent[200],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.success[500],
              backgroundColor: theme.palette.success.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[300],
              backgroundColor: theme.palette.basic.transparent[200],
            },
          },
        },
      },
      '&[data-status="info"]': {
        '.Checkbox__Control': {
          borderColor: theme.palette.info[500],
          backgroundColor: theme.palette.info.transparent[100],
        },
        '&[data-checked="true"]': {
          '.Checkbox__Control': {
            borderColor: theme.palette.info[500],
            backgroundColor: theme.palette.info[500],
          },
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.info[700],
              backgroundColor: theme.palette.info[600],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.info[400],
              backgroundColor: theme.palette.info[400],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.info[500],
              backgroundColor: theme.palette.info.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[600],
              backgroundColor: theme.palette.basic.transparent[600],
            },
          },
        },
        '&[data-checked="false"]': {
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.info[500],
              backgroundColor: theme.palette.basic.transparent[300],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.info[500],
              backgroundColor: theme.palette.info.transparent[200],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.info[500],
              backgroundColor: theme.palette.info.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[300],
              backgroundColor: theme.palette.basic.transparent[200],
            },
          },
        },
      },
      '&[data-status="warning"]': {
        '.Checkbox__Control': {
          borderColor: theme.palette.warning[500],
          backgroundColor: theme.palette.warning.transparent[100],
        },
        '&[data-checked="true"]': {
          '.Checkbox__Control': {
            borderColor: theme.palette.warning[500],
            backgroundColor: theme.palette.warning[500],
          },
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.warning[700],
              backgroundColor: theme.palette.warning[600],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.warning[400],
              backgroundColor: theme.palette.warning[400],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.warning[600],
              backgroundColor: theme.palette.warning[600],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[600],
              backgroundColor: theme.palette.basic.transparent[600],
            },
          },
        },
        '&[data-checked="false"]': {
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.warning[500],
              backgroundColor: theme.palette.warning.transparent[300],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.warning[500],
              backgroundColor: theme.palette.warning.transparent[200],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.warning[500],
              backgroundColor: theme.palette.warning.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[300],
              backgroundColor: theme.palette.basic.transparent[200],
            },
          },
        },
      },
      '&[data-status="danger"]': {
        '.Checkbox__Control': {
          borderColor: theme.palette.danger[500],
          backgroundColor: theme.palette.danger.transparent[100],
        },
        '&[data-checked="true"]': {
          '.Checkbox__Control': {
            borderColor: theme.palette.danger[500],
            backgroundColor: theme.palette.danger[500],
          },
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.danger[700],
              backgroundColor: theme.palette.danger[600],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.danger[400],
              backgroundColor: theme.palette.danger[400],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.danger[600],
              backgroundColor: theme.palette.danger[600],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[600],
              backgroundColor: theme.palette.basic.transparent[600],
            },
          },
        },
        '&[data-checked="false"]': {
          '&:focus': {
            '.Checkbox__Control': {
              borderColor: theme.palette.danger[500],
              backgroundColor: theme.palette.danger.transparent[300],
            },
          },
          '&:hover': {
            '.Checkbox__Control': {
              borderColor: theme.palette.danger[500],
              backgroundColor: theme.palette.danger.transparent[200],
            },
          },
          '&:active': {
            '.Checkbox__Control': {
              borderColor: theme.palette.danger[500],
              backgroundColor: theme.palette.danger.transparent[300],
            },
          },
          '&[data-disabled="true"]': {
            '.Checkbox__Control': {
              borderColor: theme.palette.basic.transparent[300],
              backgroundColor: theme.palette.basic.transparent[200],
            },
          },
        },
      },
    },
  };
};
