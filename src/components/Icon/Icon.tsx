import React from 'react';
import styled from '@emotion/styled';
import { StylesType } from '../../theme/types';
import { useTheme } from '../../theme/useTheme';
import iconData from './icons.json';

type StylesProps = {
  size: number;
  globalOverrides?: StylesType;
};

type IconType = {
  path: string;
};

const icons: Record<string, IconType> = iconData.icons;

const StyledIcon = styled('svg')(({ size, globalOverrides }: StylesProps) => {
  return {
    width: `${size}px`,
    height: `${size}px`,
    ...globalOverrides,
  };
});

type IconProps = {
  name: string;
  size?: number | string;
  fill?: string;
};

export const Icon = ({ name, size = 24, fill }: IconProps) => {
  const theme = useTheme();
  const icon = icons[name] || icons['question-mark-outline'];
  const color = fill || theme.palette.basic[500];
  const path = icon['path'];
  return (
    <StyledIcon size={+size} viewBox="0 0 24 24">
      <path d={path} fill={color} />
    </StyledIcon>
  );
};
