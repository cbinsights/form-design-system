/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:08:31 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const WorkFasterIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g>
			<polygon points="13.0233982 10 18 10 10.9891409 23 10.9891409 14 6 14 13.0233982 1"/>
		</g>
	</g>
</svg>
  </div>
);

export default WorkFasterIcon;

