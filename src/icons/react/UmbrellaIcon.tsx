/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Nov 11 2021 14:32:55 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UmbrellaIcon = ({
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
			<path d="M11,2 L11,4.0488281 C5.9555284,4.5523006 2,8.8258648 2,14 L4,14 C4,12.883334 4.8833339,12 6,12 C7.1166661,12 8,12.883334 8,14 L10,14 C10,12.883334 10.883334,12 12,12 C13.116666,12 14,12.883334 14,14 L16,14 C16,12.883334 16.883334,12 18,12 C19.116666,12 20,12.883334 20,14 L22,14 C22,8.8258648 18.044472,4.5523006 13,4.0488281 L13,2 L11,2 Z M12,6 C15.032268,6 17.660219,7.6728874 19.017578,10.148438 C18.690561,10.061099 18.353271,10 18,10 C16.802849,10 15.735155,10.546205 15,11.388672 C14.264845,10.546205 13.197151,10 12,10 C10.802849,10 9.7351548,10.546205 9,11.388672 C8.2648452,10.546205 7.1971509,10 6,10 C5.6467291,10 5.3094391,10.061099 4.9824219,10.148438 C6.3397808,7.6728874 8.967732,6 12,6 Z M11,14 L11,19 C11,19.56503 10.56503,20 10,20 C9.4349698,20 9,19.56503 9,19 L7,19 C7,20.64497 8.3550302,22 10,22 C11.64497,22 13,20.64497 13,19 L13,14 L11,14 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default UmbrellaIcon;
