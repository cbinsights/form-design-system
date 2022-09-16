/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Sep 13 2022 10:36:25 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ShoppingCartIcon = ({
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
			<path d="M11,1 L8,4 L6.25,4 L5.4140625,1.9960938 L2.0039062,2.0136719 L2.0136719,4.0136719 L4.0859375,4.0039062 L7.3789062,11.908203 L6.1816406,13.822266 C5.7806406,14.461266 5.7609531,15.269687 6.1269531,15.929688 C6.4929531,16.589688 7.1864063,17 7.9414062,17 L20,17 L20,15 L7.9414062,15 L7.8769531,14.882812 L9.0527344,13 L16.521484,13 C17.247484,13 17.917531,12.605703 18.269531,11.970703 L21.871094,5.4863281 C22.043094,5.1763281 22.039375,4.7981875 21.859375,4.4921875 C21.680375,4.1871875 21.352047,4 20.998047,4 L19,4 L16,1 L14.5,2.5 L16,4 L14,4 L11,1 Z M7.0820312,6 L19.298828,6 L16.521484,11 L9.1660156,11 L7.0820312,6 Z M8,18 C6.8954305,18 6,18.8954305 6,20 C6,21.1045695 6.8954305,22 8,22 C9.1045695,22 10,21.1045695 10,20 C10,18.8954305 9.1045695,18 8,18 Z M18,18 C16.8954305,18 16,18.8954305 16,20 C16,21.1045695 16.8954305,22 18,22 C19.1045695,22 20,21.1045695 20,20 C20,18.8954305 19.1045695,18 18,18 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ShoppingCartIcon;

