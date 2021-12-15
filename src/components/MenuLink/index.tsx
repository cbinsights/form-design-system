import React from 'react';
import { MenuLink as ReachMenuLink } from '@reach/menu-button';

const noop = () => {};

export interface MenuLinkProps {
  /** selection callback */
  onSelect?: () => void;

  /** React children - any JSX can be used in a menu item */
  children: React.ReactNode;

  /** Styles menu item as disabled and disables selection events */
  isDisabled?: boolean;

  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   *
   * TODO: properly type this and other Link props we have in the project, and place it somewhere it makes sense.
   * e.g.
   * type ReachLink = React.ComponentProps<typeof ReachMenuLink>['as'];
   * Link: ReachLink;
   */
  Link?: any;

  /** link destination */
  href?: string;
}

const MenuLink = ({
  onSelect,
  children,
  isDisabled,
  Link,
  ...rest
}: MenuLinkProps): JSX.Element => (
  <ReachMenuLink
    className={isDisabled ? 'fdsMenuItem--disabled' : undefined}
    onSelect={!isDisabled ? onSelect : noop}
    aria-disabled={isDisabled}
    as={Link}
    {...rest}
  >
    {children}
  </ReachMenuLink>
);

export default MenuLink;
