import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme/useTheme';
import { StylesType } from '../../theme/types';

type StylesProps = {
  mappingStyles?: StylesType;
  globalOverrides?: StylesType;
};

const StyledButton = styled('button')(
  ({ globalOverrides, mappingStyles }: StylesProps) => {
    return {
      ...mappingStyles,
      ...(globalOverrides && globalOverrides),
    };
  }
);

export type ButtonProps = {
  appearance?: 'filled' | 'outline' | 'ghost';
  status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  buttonRef?: React.Ref<HTMLButtonElement>;
};

export const Button = ({
  appearance = 'filled',
  status = 'primary',
  size = 'small',
  disabled,
  startIcon,
  endIcon,
  children,
  buttonRef,
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <StyledButton
      className="Button"
      data-appearance={appearance}
      data-status={status}
      data-size={size}
      disabled={disabled}
      mappingStyles={theme.mappings?.Button}
      globalOverrides={theme.overrides?.Button}
      ref={buttonRef}
    >
      {startIcon && <span className="Button__icon">{startIcon}</span>}
      {children && <span className="Button__label">{children}</span>}
      {endIcon && <span className="Button__icon">{endIcon}</span>}
    </StyledButton>
  );
};
