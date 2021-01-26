import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { StylesType } from '../../theme/types';
import { useTheme } from '../../theme/useTheme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  40% { transform: rotate(230deg); }
  100% { transform: rotate(360deg); }
`;

type StylesProps = {
  mappingStyles?: StylesType;
  globalOverrides?: StylesType;
};

const StyledSpinner = styled('span')(
  ({ globalOverrides, mappingStyles }: StylesProps) => {
    return {
      ...mappingStyles,
      ...(globalOverrides && globalOverrides),
    };
  },
  css`
    animation: ${spin} 0.8s infinite linear;
  `
);

export type SpinnerProps = {
  status?:
    | 'basic'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'control';
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
};

export const Spinner = ({
  status = 'primary',
  size = 'medium',
}: SpinnerProps) => {
  const theme = useTheme();
  return (
    <StyledSpinner
      className="Spinner"
      data-status={status}
      data-size={size}
      mappingStyles={theme.mappings?.Spinner}
      globalOverrides={theme.overrides?.Spinner}
    />
  );
};
