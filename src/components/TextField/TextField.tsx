import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';
import { StylesType } from '../../theme/types';
import { useTheme } from '../../theme/useTheme';

type StylesProps = {
  mappingStyles?: StylesType;
  globalOverrides?: StylesType;
};

const StyledTextField = styled('div')(
  ({ globalOverrides, mappingStyles }: StylesProps) => {
    return {
      ...mappingStyles,
      ...(globalOverrides && globalOverrides),
    };
  }
);

export type TextFieldProps = {
  status?: 'basic' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  value?: number | string;
  helperText?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
};

export const TextField = ({
  status = 'basic',
  size = 'medium',
  value,
  label,
  type = 'text',
  helperText,
  placeholder = '',
  disabled = false,
  onChange,
  inputProps,
  inputRef,
}: TextFieldProps) => {
  const theme = useTheme();

  const handleTextFieltChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledTextField
      className="TextField"
      mappingStyles={theme.mappings?.TextField}
      globalOverrides={theme.overrides?.TextField}
      data-disabled={disabled}
      data-status={status}
      data-size={size}
    >
      {label && <label className="TextField__Label">{label}</label>}
      <div className="TextField__Control">
        <input
          {...inputProps}
          disabled={disabled}
          onChange={handleTextFieltChange}
          value={value}
          placeholder={placeholder}
          className="TextField__Input"
          type={type}
          ref={inputRef}
        />
      </div>
      {helperText && (
        <span className="TextField__HelperText">{helperText}</span>
      )}
    </StyledTextField>
  );
};
