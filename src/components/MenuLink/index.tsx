import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { noop } from 'util/index';
import cc from 'classcat';

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

export const MenuLink = ({
  children,
  Link = React.Fragment,
  isDisabled,
  onSelect,
  ...rest
}: MenuLinkProps): JSX.Element => {
  return (
    <DropdownMenu.Item
      className={cc(['fdsMenuItem', isDisabled ? 'fdsMenuItem--disabled' : undefined])}
      onSelect={!isDisabled ? onSelect : noop}
      aria-disabled={isDisabled}
      {...rest}
    >
      <Link>{children}</Link>
    </DropdownMenu.Item>
  );
};

export default MenuLink;
