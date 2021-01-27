import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Checkbox } from '../';

describe('Checkbox', () => {
  const onChange = jest.fn();

  test('should render correctly with no props', () => {
    const wrapper = render(
      <Checkbox checked={true} onChange={onChange}>
        Checkbox
      </Checkbox>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with danger status', () => {
    const wrapper = render(
      <Checkbox checked={true} onChange={onChange} status="danger">
        Checkbox
      </Checkbox>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should set disabled if one is passed via props', () => {
    const wrapper = render(
      <Checkbox disabled={true} checked={true} onChange={onChange}>
        Checkbox
      </Checkbox>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should accept a working ref for a button', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(
      <Checkbox inputRef={inputRef} checked={true} onChange={onChange}>
        Checkbox
      </Checkbox>
    );
    const input = screen.getByRole('checkbox');
    expect(inputRef.current).toBe(input);
  });
});
