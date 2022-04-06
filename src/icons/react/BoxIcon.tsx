/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BoxIcon = ({
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
			<path d="M1.50963881,10.96 C1.00963881,10.68 0.859638814,10.07 1.13963881,9.59 L2.63963881,7 C2.74963881,6.8 2.91963881,6.66 3.10963881,6.58 L10.9396388,2.18 C11.0996388,2.06 11.2996388,2 11.5096388,2 C11.7196388,2 11.9196388,2.06 12.0796388,2.18 L19.9796388,6.62 C20.1696388,6.72 20.3296388,6.88 20.4196388,7.08 L21.8696388,9.6 C22.1496388,10.08 21.9796388,10.69 21.5096388,10.96 L20.5096388,11.54 L20.5096388,16.5 C20.5096388,16.88 20.2996388,17.21 19.9796388,17.38 L12.0796388,21.82 C11.9196388,21.94 11.7196388,22 11.5096388,22 C11.2996388,22 11.0996388,21.94 10.9396388,21.82 L3.03963881,17.38 C2.71963881,17.21 2.50963881,16.88 2.50963881,16.5 L2.50963881,10.96 C2.20963881,11.13 1.82963881,11.14 1.50963881,10.96 M11.5096388,4.15 L11.5096388,4.15 L11.5096388,10.85 L11.5096388,10.85 L17.4696388,7.5 L11.5096388,4.15 M4.50963881,15.91 L10.5096388,19.29 L10.5096388,12.58 L4.50963881,9.21 L4.50963881,15.91 M18.5096388,15.91 L18.5096388,12.69 L13.5096388,15.59 C13.1796388,15.77 12.8096388,15.76 12.5096388,15.6 L12.5096388,19.29 L18.5096388,15.91 M13.3596388,13.36 L19.6396388,9.73 L19.0596388,8.72 L12.7796388,12.35 L13.3596388,13.36 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default BoxIcon;

