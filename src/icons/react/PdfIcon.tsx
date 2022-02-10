/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Feb 10 2022 10:13:01 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const PdfIcon = ({
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
			<path d="M6,2 C4.9057453,2 4,2.9057453 4,4 L4,20 C4,21.094255 4.9057453,22 6,22 L18,22 C19.094255,22 20,21.094255 20,20 L20,8 L14,2 L6,2 Z M6,4 L13,4 L13,9 L18,9 L18,20 L6,20 L6,4 Z M11.832031,9 C11.282031,9 10.870062,9.3734375 10.789062,10.023438 C10.709062,10.672438 11.030797,11.807328 11.591797,12.861328 C11.350797,13.591328 11.110062,14.239672 10.789062,14.888672 C9.7460625,15.212672 8.7838125,15.698547 8.3828125,16.185547 C7.7418125,16.914547 8.0626562,17.401531 8.2226562,17.644531 C8.3836563,17.887531 8.6243125,18 8.9453125,18 C9.1063125,18 9.2667344,17.967719 9.4277344,17.886719 C10.069734,17.643719 10.709563,16.670156 11.351562,15.535156 C11.912563,15.373156 12.474156,15.211859 13.035156,15.130859 C13.596156,15.778859 14.159625,16.185656 14.640625,16.347656 C15.201625,16.509656 15.682828,16.265266 15.923828,15.697266 C16.083828,15.210266 16.002562,14.8065 15.601562,14.5625 C15.119562,14.2385 14.317469,14.237359 13.355469,14.318359 C13.034469,13.832359 12.715609,13.346375 12.474609,12.859375 C12.875609,11.643375 13.035,10.590406 12.875,9.9414062 C12.714,9.3734063 12.382031,9 11.832031,9 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default PdfIcon;

