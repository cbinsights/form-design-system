/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 23 2022 10:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const OrderAscendingIcon = ({
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
			<path d="M12,3 L12,13 L16,13 L9,21 L2,13 L6,13 L6,3 L12,3 Z M18.8792008,13 C19.8974076,13 20.7327032,13.4362073 21.2612303,14.231903 C21.7457986,14.9165463 22,15.8577627 22,16.9736774 C22.001021,19.4621132 20.8084646,21 18.8712136,21 C17.4236423,21 16.2799967,20.1119853 16.0898496,18.8267966 L17.8808642,18.8267966 C17.9953614,19.2483643 18.3915175,19.5153979 18.8811973,19.5153979 C19.7695726,19.5153979 20.3323149,18.5480874 20.2668879,17.1421427 L20.1730442,17.1421427 C19.8489764,17.8472714 19.2042429,18.2434848 18.3700493,18.2434848 C17.0073286,18.2434848 16,17.1801647 16,15.7375619 C16,14.1375451 17.1924123,13 18.8792008,13 Z M10,5 L8,5 L8,13 L8,15 L5.828,15 L9,18.172 L12.172,15 L10,15 L10,13 L10,5 Z M18.8951741,14.4888124 C18.2562391,14.4888124 17.7590679,15.0090508 17.7590679,15.6785996 C17.7590679,16.3524611 18.2470384,16.8578573 18.8951741,16.8578573 C19.5392206,16.8578573 20.0292838,16.3533873 20.0292838,15.6849166 C20.0292838,15.0099769 19.5341092,14.4888124 18.8951741,14.4888124 Z M20,3 L20,11 L18.5,11 L18.5,4.83567476 L18.422154,4.83567476 L17,6.13778913 L17,4.38612175 L18.5,3 L20,3 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default OrderAscendingIcon;

