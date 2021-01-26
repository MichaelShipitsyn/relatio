import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from './Text';

const meta: Meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    className: { table: { disable: true } },
  },
};

export default meta;

export const TextDefault: Story<TextProps> = args => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo erat,
    scelerisque in mattis in, mattis id ex. Quisque aliquet aliquet blandit.
    Curabitur iaculis lectus odio, vitae dictum eros egestas lacinia. Proin non
    sapien rutrum, finibus dolor non, porta mi. Phasellus et lacus nisl.
  </Text>
);
TextDefault.storyName = 'Default';
