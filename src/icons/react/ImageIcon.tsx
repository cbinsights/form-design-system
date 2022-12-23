/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:15:19 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ImageIcon = ({
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
			<path d="M20,4 C21.093063,4 22,4.9069372 22,6 L22,6 L22,18 C22,19.093063 21.093063,20 20,20 L20,20 L4,20 C2.9069372,20 2,19.093063 2,18 L2,18 L2,6 C2,4.9069372 2.9069372,4 4,4 L4,4 Z M16.3330078,11.9145508 L10.2017019,18 L20,18 L20,15.7317171 L16.3330078,11.9145508 Z M6.73840332,15.4554443 L4.14525846,18 L9.17262101,18 L6.73840332,15.4554443 Z M20,6 L4,6 L4,15.3300604 L6.73840332,12.5615234 L9.67382812,15.6334229 L16.3330078,9 L20,12.8300359 L20,6 Z M8.5,9 C9.32842712,9 10,9.67157288 10,10.5 C10,11.3284271 9.32842712,12 8.5,12 C7.67157288,12 7,11.3284271 7,10.5 C7,9.67157288 7.67157288,9 8.5,9 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ImageIcon;

