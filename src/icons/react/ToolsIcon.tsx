/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:26 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ToolsIcon = ({
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
			<path d="M8.32342095,2.74626198 C9.37514189,3.4963573 9.99987044,4.70819541 10.0007927,6 C9.99544517,6.33851735 9.94500101,6.67481177 9.8507927,7 L21.7107927,18.88 C22.0985163,19.2700375 22.0985163,19.8999625 21.7107927,20.29 L20.2907927,21.71 C19.9007552,22.0977236 19.2708302,22.0977236 18.8807927,21.71 L7.0007927,9.85 C6.67560447,9.94420831 6.33931004,9.99465247 6.0007927,10 C4.70898811,9.99907774 3.49714999,9.3743492 2.74705467,8.32262825 C1.99695936,7.2709073 1.80095577,5.9216779 2.2207927,4.7 L4.7607927,7.24 L7.2407927,4.76 L4.7007927,2.22 C5.9224706,1.80016307 7.2717,1.99616666 8.32342095,2.74626198 Z M7.7607927,13.42 L10.5907927,16.25 L5.1207927,21.71 C4.73075524,22.0977236 4.10083015,22.0977236 3.7107927,21.71 L3.7107927,21.71 L2.2907927,20.29 C1.9030691,19.8999625 1.9030691,19.2700375 2.2907927,18.88 L2.2907927,18.88 L7.7607927,13.42 Z M20.0007927,2 L22.0007927,4 L20.0007927,8 L18.0007927,8 L15.8307927,10.17 L13.8307927,8.17 L16.0007927,6 L16.0007927,4 L20.0007927,2 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ToolsIcon;

