import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { table: { disable: true } },
    inputProps: { table: { disable: true } },
    inputRef: { table: { disable: true } },
  },
};

export default meta;

export const CheckboxDefault: Story<CheckboxProps> = args => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };
  return (
    <Checkbox {...args} checked={checked} onChange={handleChange}>
      <span>Label</span>
    </Checkbox>
  );
};
CheckboxDefault.storyName = 'Default';
