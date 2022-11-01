/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Nov 01 2022 17:18:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UndoIcon = ({
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
			<path d="M22,7 L22,17 L22,19 L20,19 L10,19 L13.7616799,14.3977115 C7.62772432,8.10662072 5.07452547,9.04052576 2,11.3935034 C2.36708249,9.42537675 3.48834373,7.09329955 7.03750076,6.22328842 C9.63425711,5.58674095 12.7815536,6.09932083 17.4506174,10.5777049 L22,7 Z M20,11 L17.4798126,13.1144026 C15.178596,10.857445 12.9955156,8.90213874 10.6969074,7.91851148 C8.39829926,6.93488422 6.80076742,7.1717457 4.99178517,8.66191155 C8.25256424,7.94425912 10.3122944,9.30329165 11.7355527,10.3935743 C12.6843917,11.1204294 14.1878249,12.4639343 16.2458525,14.424089 L14,17 L20,17 L20,11 Z" transform="translate(12.000000, 12.500000) scale(-1, 1) translate(-12.000000, -12.500000)"/>
		</g>
	</g>
</svg>
  </div>
);

export default UndoIcon;

