import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Text } from '../';

describe('Text', () => {
  test('should render correctly with no props', () => {
    const wrapper = render(<Text>Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with danger color', () => {
    const wrapper = render(<Text color="danger">Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with variant prop', () => {
    const wrapper = render(<Text variant="h1">Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correctly with tag prop', () => {
    const wrapper = render(<Text tag="h1">Text</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
