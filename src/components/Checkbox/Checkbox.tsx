import React, { ReactNode, InputHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';
import { StylesType } from '../../theme/types';
import { useTheme } from '../../theme/useTheme';
import { DefaultCheckedIcon, DefaultIndeterminateIcon } from './icons';

type StylesProps = {
  mappingStyles?: StylesType;
  globalOverrides?: StylesType;
};

const StyledCheckbox = styled('label')(
  ({ globalOverrides, mappingStyles }: StylesProps) => {
    return {
      ...mappingStyles,
      ...(globalOverrides && globalOverrides),
    };
  }
);

const HiddenInput = styled.input({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
});

export type CheckboxProps = {
  status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  indeterminate?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
};

export const Checkbox = ({
  status = 'basic',
  indeterminate = false,
  checked = false,
  disabled = false,
  onChange,
  children,
  inputProps,
  inputRef,
}: CheckboxProps) => {
  const theme = useTheme();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledCheckbox
      className="Checkbox"
      mappingStyles={theme.mappings?.Checkbox}
      globalOverrides={theme.overrides?.Checkbox}
      data-disabled={disabled}
      data-checked={checked}
      data-status={status}
    >
      <HiddenInput
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={handleCheckboxChange}
        ref={inputRef}
        {...inputProps}
      />
      <span className="Checkbox__Control">
        {indeterminate ? <DefaultIndeterminateIcon /> : <DefaultCheckedIcon />}
      </span>
      {children && <span className="Checkbox__Label">{children}</span>}
    </StyledCheckbox>
  );
};
