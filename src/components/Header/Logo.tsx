import React, { memo } from 'react';
import cx from 'classcat';

export interface LogoProps {
  Link?: React.ComponentType;
  src: string;
}

export const Logo = ({ Link = React.Fragment, src }: LogoProps): JSX.Element => (
  <div className={cx(['logoWrapper', 'padding--right--s'])}>
    <Link>
      <img src={src} alt="logo" />
    </Link>
  </div>
);

export default memo(Logo);
