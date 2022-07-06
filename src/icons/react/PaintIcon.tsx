/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:45 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const PaintIcon = ({
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
		<g fillRule="nonzero">
			<path d="M19.7780864,15.8529412 C19.7780864,15.8529412 17.5561728,18.2782353 17.5561728,19.7647059 C17.5561728,20.9992247 18.5509574,22 19.7780864,22 C21.0052154,22 22,20.9992247 22,19.7647059 C22,18.2782353 19.7780864,15.8529412 19.7780864,15.8529412 M4.45799195,14.1764706 L9.77947507,8.82294118 L15.1009582,14.1764706 M17.0673518,12.9917647 L7.13539786,3 L5.56894876,4.57588235 L8.21302597,7.23588235 L2.49159839,12.9917647 C1.83613387,13.6176471 1.83613387,14.7017647 2.49159839,15.3611765 L8.60186085,21.5082353 C8.92403833,21.8323529 9.35731148,22 9.77947507,22 C10.2016387,22 10.6349118,21.8323529 10.9570893,21.5082353 L17.0673518,15.3611765 C17.7228163,14.7017647 17.7228163,13.6176471 17.0673518,12.9917647 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default PaintIcon;

