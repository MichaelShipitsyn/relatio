import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Button, Icon } from '../';

describe('Button', () => {
  test('should render correctly with no props', () => {
    const wrapper = render(<Button>Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with endIcon', () => {
    const wrapper = render(
      <Button endIcon={<Icon name="list-outline" />}>Button</Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with startIcon', () => {
    const wrapper = render(
      <Button startIcon={<Icon name="list-outline" />}>Button</Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with outline appearance', () => {
    const wrapper = render(<Button appearance="outline">Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with danger status', () => {
    const wrapper = render(<Button status="danger">Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render with giant size', () => {
    const wrapper = render(<Button size="giant">Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set disabled to false by default', () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('should set disabled if one is passed via props', () => {
    render(<Button disabled={true}>Button</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('should accept a working ref for a button', () => {
    const buttonRef = React.createRef<HTMLButtonElement>();
    render(<Button buttonRef={buttonRef}>Button</Button>);
    const button = screen.getByRole('button');
    expect(buttonRef.current).toBe(button);
  });
});
