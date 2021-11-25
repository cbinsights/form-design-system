import React from 'react';
import { render } from '@testing-library/react';

import FlexItem from 'components/FlexItem';
import Flex from '.';

const hasAllClasses = (container, classes) =>
  classes.every((c) => Object.values(container.firstChild.classList).includes(c));

const hasRowClasses = (container) =>
  hasAllClasses(container, ['flex--row', 'flex--alignStretch']);

const hasColumnClasses = (container) =>
  hasAllClasses(container, ['flex--column', 'flex--alignStretch']);

describe('Flex Component', () => {
  it('displays as flex row with default props', () => {
    const { container } = render(
      <Flex>
        <FlexItem />
      </Flex>
    );
    expect(hasRowClasses(container)).toBe(true);
    expect(hasColumnClasses(container)).toBe(false);
  });

  it('sets direction to colum', () => {
    const { container } = render(
      <Flex direction="column">
        <FlexItem />
      </Flex>
    );
    expect(hasRowClasses(container)).toBe(false);
    expect(hasColumnClasses(container)).toBe(true);
  });

  it('reverses items', () => {
    const { container } = render(
      <Flex reverse>
        <FlexItem />
      </Flex>
    );
    expect(container.firstChild).toHaveClass('flex--reverse');
  });

  it('changes align class correctly', () => {
    const { container } = render(
      <Flex align="center">
        <FlexItem />
      </Flex>
    );
    expect(container.firstChild).toHaveClass('flex--alignCenter');
    expect(container.firstChild).not.toHaveClass('flex--alignStretch');
  });

  it('changes justify class correctly', () => {
    const { container } = render(
      <Flex justify="center">
        <FlexItem />
      </Flex>
    );
    expect(container.firstChild).toHaveClass('flex--justifyCenter');
  });

  it('uses correct classes for a column that switches direction at `m` breakpoint', () => {
    const { container } = render(
      <Flex direction="column" switchDirection="m">
        <FlexItem />
      </Flex>
    );
    expect(hasRowClasses(container)).toBe(false);
    expect(hasColumnClasses(container)).toBe(true);
    expect(container.firstChild).toHaveClass('m:flex--row');
  });

  it('uses correct classes for a row that switches direction at `m` breakpoint', () => {
    const { container } = render(
      <Flex direction="row" switchDirection="m">
        <FlexItem />
      </Flex>
    );
    expect(hasRowClasses(container)).toBe(true);
    expect(hasColumnClasses(container)).toBe(false);
    expect(container.firstChild).toHaveClass('m:flex--column');
  });
});
