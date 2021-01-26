import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StylesType } from '../../theme/types';
import { useTheme } from '../../theme/useTheme';
import clsx from 'clsx';

type StylesProps = {
  mappingStyles?: StylesType;
  globalOverrides?: StylesType;
};

const StyledText = styled('p')(
  ({ globalOverrides, mappingStyles }: StylesProps) => {
    return {
      ...mappingStyles,
      ...(globalOverrides && globalOverrides),
    };
  }
);

export type TextVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 's1'
  | 's2'
  | 'p1'
  | 'p2'
  | 'c1'
  | 'c2'
  | 'label'
  | 'inherit';

const element: { [key in TextVariants]: keyof JSX.IntrinsicElements } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  s1: 'h6',
  s2: 'h6',
  p1: 'p',
  p2: 'p',
  c1: 'span',
  c2: 'span',
  label: 'span',
  inherit: 'span',
};

export type TextProps = {
  color?:
    | 'inherit'
    | 'basic'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
  className?: string;
  variant?: TextVariants;
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
};

export const Text = ({
  color = 'inherit',
  variant = 'p1',
  className = '',
  tag,
  children,
}: TextProps) => {
  const theme = useTheme();
  const Component: keyof JSX.IntrinsicElements = tag || element[variant];
  return (
    <StyledText
      as={Component}
      data-color={color}
      data-variant={variant}
      mappingStyles={theme.mappings?.Text}
      globalOverrides={theme.overrides?.Text}
      className={clsx('Text', className)}
    >
      {children}
    </StyledText>
  );
};
