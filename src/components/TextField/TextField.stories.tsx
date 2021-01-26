import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from './TextField';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    value: { table: { disable: true } },
    label: { table: { disable: true } },
    type: { table: { disable: true } },
    onChange: { table: { disable: true } },
    inputProps: { table: { disable: true } },
    inputRef: { table: { disable: true } },
  },
};

export default meta;

export const TextFieldDefault: Story<TextFieldProps> = args => {
  return <TextField {...args} label="Label" />;
};
TextFieldDefault.storyName = 'Default';
