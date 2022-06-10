/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 09 2022 11:47:55 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UnpublishIcon = ({
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
			<path d="M12,3 C9.709,3 7.5608125,4.1379063 6.2578125,6.0039062 C2.7848125,6.1319063 0,8.997 0,12.5 C0,16.084 2.916,19 6.5,19 L7,19 L7,17 L6.5,17 C4.019,17 2,14.981 2,12.5 C2,10.019 4.019,8 6.5,8 L7.359375,8.046875 L7.6679688,7.5136719 C8.5599687,5.9626719 10.22,5 12,5 C14.472,5 16.544641,6.7728437 16.931641,9.2148438 L17.082031,10.1757812 L18.181641,10.03125 C18.286641,10.01725 18.391,10 18.5,10 C20.43,10 22,11.57 22,13.5 C22,15.43 20.43,17 18.5,17 L17,17 L17,19 L18.5,19 C21.532,19 24,16.533 24,13.5 C24,10.536 21.643078,8.1119062 18.705078,8.0039062 C17.839078,5.0559063 15.149,3 12,3 Z M9.414062,13 L8,14.414062 L10.585938,17 L8.025391,19.560547 L9.439453,20.974609 L12,18.414062 L14.585938,21 L16,19.585938 L13.414062,17 L16,14.414062 L14.585938,13 L12,15.585938 L9.414062,13 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default UnpublishIcon;

