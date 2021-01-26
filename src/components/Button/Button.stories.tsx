import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Spinner } from '../Spinner';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    overrides: { table: { disable: true } },
    buttonRef: { table: { disable: true } },
  },
};

export default meta;

export const ButtonDefault: Story<ButtonProps> = args => (
  <Button {...args}>Button</Button>
);
ButtonDefault.storyName = 'Default';

export const ButtonStartIcon: Story<ButtonProps> = args => (
  <Button {...args} startIcon={<Spinner size="small" status="warning" />}>
    LOADING
  </Button>
);
ButtonStartIcon.storyName = 'Start icon';
ButtonStartIcon.args = {
  disabled: true,
};

export const ButtonEndIcon: Story<ButtonProps> = args => (
  <Button {...args} endIcon={<Spinner size="small" status="warning" />}>
    LOADING
  </Button>
);
ButtonEndIcon.storyName = 'End icon';
ButtonEndIcon.args = {
  disabled: true,
};
