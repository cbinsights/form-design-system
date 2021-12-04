/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Nov 11 2021 14:32:55 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const QuestionIcon = ({
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
			<path d="M4.0097656,2 C2.9077656,2 2.0107656,2.8960469 2.0097656,3.9980469 L2,21.998047 L6,18 L20,18 C21.103,18 22,17.103 22,16 L22,4 C22,2.897 21.103,2 20,2 L4.0097656,2 Z M4.0097656,4 L20,4 L20,16 L5.171875,16 L4.0039062,17.169922 L4.0097656,4 Z M12,5 C9.954,5 9,6.79 9,8 L11,8 C11,7.835 11.174,7 12,7 C12.989,7 13,7.99 13,8 C13,9.054 11,11.025 11,12 L13,12 C13,11.014 15,9.422 15,8 C15,6.525 13.878,5 12,5 Z M11,13 L11,15 L13,15 L13,13 L11,13 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default QuestionIcon;
