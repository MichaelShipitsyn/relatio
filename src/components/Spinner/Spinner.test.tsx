import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import * as React from 'react';
import { Spinner } from '../';

describe('Spinner', () => {
  test('should render correctly with no props', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with danger status', () => {
    const wrapper = render(<Spinner status="danger" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with giant size', () => {
    const wrapper = render(<Spinner size="giant" />);
    expect(wrapper).toMatchSnapshot();
  });
});
