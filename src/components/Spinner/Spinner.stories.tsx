import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
};

export default meta;

export const SpinnerDefault: Story<SpinnerProps> = args => (
  <Spinner {...args} />
);
SpinnerDefault.storyName = 'Default';
