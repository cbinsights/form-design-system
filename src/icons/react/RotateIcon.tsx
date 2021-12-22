/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 22 2021 09:31:30 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const RotateIcon = ({
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
			<path d="M12.0019531,2 C6.4906193,2 2.0019531,6.4886661 2.0019531,12 C2.0019531,17.511334 6.4906193,22 12.0019531,22 C12.744953,22 13.485125,21.917906 14.203125,21.753906 L13.765625,19.777344 C13.189625,19.908344 12.596953,20 12.0019531,20 C7.5712872,20 4.0019531,16.430666 4.0019531,12 C4.0019531,7.5693339 7.5712872,4 12.0019531,4 C13.704556,4 15.270464,4.5348237 16.564453,5.4375 L15.0019531,7 L20.0019531,7 L20.0019531,2 L18.0019531,4 C16.330317,2.7446772 14.248737,2 12.0019531,2 Z M20.001953,12 C19.991953,12.605 19.915344,13.204203 19.777344,13.783203 L21.720703,14.259766 C21.893703,13.536766 21.988,12.753 22,12 L20.001953,12 Z M19.171875,15.470703 C18.908875,16.006703 18.584937,16.514469 18.210938,16.980469 L19.763672,18.259766 C20.230672,17.677766 20.634891,17.041094 20.962891,16.371094 L19.171875,15.470703 Z M16.945312,18.242188 C16.479312,18.614188 15.972453,18.932453 15.439453,19.189453 L16.300781,21.019531 C16.966781,20.697531 17.600594,20.297031 18.183594,19.832031 L16.945312,18.242188 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default RotateIcon;

