import { ThemeType, StylesType } from '../../types';

export const ButtonMapping = (theme: ThemeType): StylesType => {
  return {
    '&.Button': {
      cursor: 'pointer',
      borderRadius: theme.shape.borderRadius,
      borderWidth: theme.shape.borderWidth,
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      '.Button__icon': {
        marginLeft: 4,
        marginRight: 4,
      },
      '&:focus': {
        outline: 'none',
      },
      '&:disabled': {
        cursor: 'default',
      },
      '&[data-appearance="filled"]': {
        '&[data-status="basic"]': {
          borderColor: theme.palette.basic[300],
          backgroundColor: theme.palette.basic[300],
          color: theme.palette.basic[800],
          '&:focus': {
            borderColor: theme.palette.basic[500],
            backgroundColor: theme.palette.basic[400],
          },
          '&:hover': {
            borderColor: theme.palette.basic[200],
            backgroundColor: theme.palette.basic[200],
          },
          '&:active': {
            borderColor: theme.palette.basic[400],
            backgroundColor: theme.palette.basic[400],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="primary"]': {
          borderColor: theme.palette.primary[500],
          backgroundColor: theme.palette.primary[500],
          color: theme.palette.basic[100],
          '&:focus': {
            borderColor: theme.palette.primary[700],
            backgroundColor: theme.palette.primary[600],
          },
          '&:hover': {
            borderColor: theme.palette.primary[400],
            backgroundColor: theme.palette.primary[400],
          },
          '&:active': {
            borderColor: theme.palette.primary[600],
            backgroundColor: theme.palette.primary[600],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="success"]': {
          borderColor: theme.palette.success[500],
          backgroundColor: theme.palette.success[500],
          color: theme.palette.basic[100],
          '&:focus': {
            borderColor: theme.palette.success[700],
            backgroundColor: theme.palette.success[600],
          },
          '&:hover': {
            borderColor: theme.palette.success[400],
            backgroundColor: theme.palette.success[400],
          },
          '&:active': {
            borderColor: theme.palette.success[600],
            backgroundColor: theme.palette.success[600],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="info"]': {
          borderColor: theme.palette.info[500],
          backgroundColor: theme.palette.info[500],
          color: theme.palette.basic[100],
          '&:focus': {
            borderColor: theme.palette.info[700],
            backgroundColor: theme.palette.info[600],
          },
          '&:hover': {
            borderColor: theme.palette.info[400],
            backgroundColor: theme.palette.info[400],
          },
          '&:active': {
            borderColor: theme.palette.info[600],
            backgroundColor: theme.palette.info[600],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="warning"]': {
          borderColor: theme.palette.warning[500],
          backgroundColor: theme.palette.warning[500],
          color: theme.palette.basic[100],
          '&:focus': {
            outline: 'none',
            borderColor: theme.palette.warning[700],
            backgroundColor: theme.palette.warning[600],
          },
          '&:hover': {
            borderColor: theme.palette.warning[400],
            backgroundColor: theme.palette.warning[400],
          },
          '&:active': {
            borderColor: theme.palette.warning[600],
            backgroundColor: theme.palette.warning[600],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="danger"]': {
          borderColor: theme.palette.danger[500],
          backgroundColor: theme.palette.danger[500],
          color: theme.palette.basic[100],
          '&:focus': {
            borderColor: theme.palette.danger[700],
            backgroundColor: theme.palette.danger[600],
          },
          '&:hover': {
            borderColor: theme.palette.danger[400],
            backgroundColor: theme.palette.danger[400],
          },
          '&:active': {
            borderColor: theme.palette.danger[600],
            backgroundColor: theme.palette.danger[600],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic.transparent[600],
          },
        },
      },
      '&[data-appearance="outline"]': {
        '&[data-status="basic"]': {
          borderColor: theme.palette.basic[600],
          backgroundColor: theme.palette.basic.transparent[100],
          color: theme.palette.basic[600],
          '&:focus': {
            borderColor: theme.palette.basic[600],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic[600],
          },
          '&:hover': {
            borderColor: theme.palette.basic[600],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic[600],
          },
          '&:active': {
            borderColor: theme.palette.basic[600],
            backgroundColor: theme.palette.basic.transparent[300],
            color: theme.palette.basic[600],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="primary"]': {
          borderColor: theme.palette.primary[500],
          backgroundColor: theme.palette.primary.transparent[100],
          color: theme.palette.primary[500],
          '&:focus': {
            borderColor: theme.palette.primary[500],
            backgroundColor: theme.palette.primary.transparent[300],
            color: theme.palette.primary[500],
          },
          '&:hover': {
            borderColor: theme.palette.primary[500],
            backgroundColor: theme.palette.primary.transparent[200],
            color: theme.palette.primary[500],
          },
          '&:active': {
            borderColor: theme.palette.primary[500],
            backgroundColor: theme.palette.primary.transparent[300],
            color: theme.palette.primary[500],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="success"]': {
          borderColor: theme.palette.success[500],
          backgroundColor: theme.palette.success.transparent[100],
          color: theme.palette.success[500],
          '&:focus': {
            borderColor: theme.palette.success[500],
            backgroundColor: theme.palette.success.transparent[300],
            color: theme.palette.success[500],
          },
          '&:hover': {
            borderColor: theme.palette.success[500],
            backgroundColor: theme.palette.success.transparent[200],
            color: theme.palette.success[500],
          },
          '&:active': {
            borderColor: theme.palette.success[500],
            backgroundColor: theme.palette.success.transparent[300],
            color: theme.palette.success[500],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="info"]': {
          borderColor: theme.palette.info[500],
          backgroundColor: theme.palette.info.transparent[100],
          color: theme.palette.info[500],
          '&:focus': {
            borderColor: theme.palette.info[500],
            backgroundColor: theme.palette.info.transparent[300],
            color: theme.palette.info[500],
          },
          '&:hover': {
            borderColor: theme.palette.info[500],
            backgroundColor: theme.palette.info.transparent[200],
            color: theme.palette.info[500],
          },
          '&:active': {
            borderColor: theme.palette.info[500],
            backgroundColor: theme.palette.info.transparent[300],
            color: theme.palette.info[500],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="warning"]': {
          borderColor: theme.palette.warning[500],
          backgroundColor: theme.palette.warning.transparent[100],
          color: theme.palette.warning[500],
          '&:focus': {
            borderColor: theme.palette.warning[500],
            backgroundColor: theme.palette.warning.transparent[300],
            color: theme.palette.warning[500],
          },
          '&:hover': {
            borderColor: theme.palette.warning[500],
            backgroundColor: theme.palette.warning.transparent[200],
            color: theme.palette.warning[500],
          },
          '&:active': {
            borderColor: theme.palette.warning[500],
            backgroundColor: theme.palette.warning.transparent[300],
            color: theme.palette.warning[500],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="danger"]': {
          borderColor: theme.palette.danger[500],
          backgroundColor: theme.palette.danger.transparent[100],
          color: theme.palette.danger[500],
          '&:focus': {
            borderColor: theme.palette.danger[500],
            backgroundColor: theme.palette.danger.transparent[300],
            color: theme.palette.danger[500],
          },
          '&:hover': {
            borderColor: theme.palette.danger[500],
            backgroundColor: theme.palette.danger.transparent[200],
            color: theme.palette.danger[500],
          },
          '&:active': {
            borderColor: theme.palette.danger[500],
            backgroundColor: theme.palette.danger.transparent[300],
            color: theme.palette.danger[500],
          },
          '&:disabled': {
            borderColor: theme.palette.basic.transparent[300],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
      },
      '&[data-appearance="ghost"]': {
        '&[data-status="basic"]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme.palette.basic[600],
          '&:focus': {
            borderColor: theme.palette.basic.transparent[500],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic[600],
          },
          '&:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[100],
            color: theme.palette.basic[600],
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic[600],
          },
          '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="primary"]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme.palette.primary[500],
          '&:focus': {
            borderColor: theme.palette.basic.transparent[500],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.primary[500],
          },
          '&:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[100],
            color: theme.palette.primary[500],
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.primary[500],
          },
          '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="success"]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme.palette.success[500],
          '&:focus': {
            borderColor: theme.palette.basic.transparent[500],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.success[500],
          },
          '&:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[100],
            color: theme.palette.success[500],
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.success[500],
          },
          '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="info"]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme.palette.info[500],
          '&:focus': {
            borderColor: theme.palette.basic.transparent[500],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.info[500],
          },
          '&:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[100],
            color: theme.palette.info[500],
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.info[500],
          },
          '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="warning"]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme.palette.warning[500],
          '&:focus': {
            borderColor: theme.palette.basic.transparent[500],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.warning[500],
          },
          '&:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[100],
            color: theme.palette.warning[500],
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.warning[500],
          },
          '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
        '&[data-status="danger"]': {
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          color: theme.palette.danger[500],
          '&:focus': {
            borderColor: theme.palette.basic.transparent[500],
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.danger[500],
          },
          '&:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[100],
            color: theme.palette.danger[500],
          },
          '&:active': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.danger[500],
          },
          '&:disabled': {
            borderColor: 'transparent',
            backgroundColor: theme.palette.basic.transparent[200],
            color: theme.palette.basic.transparent[600],
          },
        },
      },
      '&[data-size="tiny"]': {
        minWidth: theme.sizes.tiny,
        minHeight: theme.sizes.tiny,
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 6,
        paddingBottom: 6,
        fontSize: 10,
        fontWeight: 'bold',
        '.Button__label': {
          marginLeft: 6,
          marginRight: 6,
        },
      },
      '&[data-size="small"]': {
        minWidth: theme.sizes.small,
        minHeight: theme.sizes.small,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: 12,
        fontWeight: 'bold',
        '.Button__label': {
          marginLeft: 8,
          marginRight: 8,
        },
      },
      '&[data-size="medium"]': {
        minWidth: theme.sizes.medium,
        minHeight: theme.sizes.medium,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 12,
        paddingBottom: 12,
        fontSize: 14,
        fontWeight: 'bold',
        '.Button__label': {
          marginLeft: 10,
          marginRight: 10,
        },
      },
      '&[data-size="large"]': {
        minWidth: theme.sizes.large,
        minHeight: theme.sizes.large,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 14,
        paddingBottom: 14,
        fontSize: 16,
        fontWeight: 'bold',
        '.Button__label': {
          marginLeft: 10,
          marginRight: 10,
        },
      },
      '&[data-size="giant"]': {
        minWidth: theme.sizes.giant,
        minHeight: theme.sizes.giant,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16,
        paddingBottom: 16,
        fontSize: 18,
        fontWeight: 'bold',
        '.Button__label': {
          marginLeft: 12,
          marginRight: 12,
        },
      },
    },
  };
};
