import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { TextField } from '../';

describe('TextField', () => {
  test('should render correctly with no props', () => {
    const wrapper = render(<TextField />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with danger status', () => {
    const wrapper = render(<TextField status="danger" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with large size', () => {
    const wrapper = render(<TextField size="large" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with label', () => {
    render(<TextField label="label" />);
    expect(screen.getByText('label')).toBeInTheDocument();
  });

  test('should render with helperText', () => {
    render(<TextField helperText="helperText" />);
    expect(screen.getByText('helperText')).toBeInTheDocument();
  });

  test('should render with placeholder', () => {
    const wrapper = render(<TextField placeholder="placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with disabled prop', () => {
    const wrapper = render(<TextField disabled={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should accept a working ref for input', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<TextField type="checkbox" inputRef={inputRef} />);
    const input = screen.getByRole('checkbox');
    expect(inputRef.current).toBe(input);
  });
});
