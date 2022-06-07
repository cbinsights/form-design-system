/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed May 04 2022 16:41:33 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const OrderDescendingIcon = ({
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
			<path d="M12,3 L12,13 L16,13 L9,21 L2,13 L6,13 L6,3 L12,3 Z M21,13 L21,21 L19.5,21 L19.5,14.8356748 L19.422154,14.8356748 L18,16.1377891 L18,14.3861218 L19.5,13 L21,13 Z M10,5 L8,5 L8,13 L8,15 L5.828,15 L9,18.172 L12.172,15 L10,15 L10,13 L10,5 Z M18.8792008,3 C19.8974076,3 20.7327032,3.43620728 21.2612303,4.23190298 C21.7457986,4.91654629 22,5.85776266 22,6.97367735 C22.001021,9.46211321 20.8084646,11 18.8712136,11 C17.4236423,11 16.2799967,10.1119853 16.0898496,8.82679656 L17.8808642,8.82679656 C17.9953614,9.24836434 18.3915175,9.51539787 18.8811973,9.51539787 C19.7695726,9.51539787 20.3323149,8.54808743 20.2668879,7.14214273 L20.1730442,7.14214273 C19.8489764,7.84727144 19.2042429,8.24348477 18.3700493,8.24348477 C17.0073286,8.24348477 16,7.1801647 16,5.73756193 C16,4.13754511 17.1924123,3 18.8792008,3 Z M18.8951741,4.48881242 C18.2562391,4.48881242 17.7590679,5.00905077 17.7590679,5.67859959 C17.7590679,6.35246112 18.2470384,6.85785727 18.8951741,6.85785727 C19.5392206,6.85785727 20.0292838,6.35338727 20.0292838,5.68491663 C20.0292838,5.00997692 19.5341092,4.48881242 18.8951741,4.48881242 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default OrderDescendingIcon;

