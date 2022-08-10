/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const TeamIcon = ({
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
			<path d="M8.65960858,4.06930826 C8.32433903,3.8565352 7.92659261,3.73333333 7.5,3.73333333 C6.30313333,3.73333333 5.33333333,4.70313333 5.33333333,5.9 C5.33333333,7.09686667 6.30313333,8.06666667 7.5,8.06666667 C7.69137475,8.06666667 7.87694411,8.04187191 8.05367175,7.99531872 C8.13341615,8.6063793 8.29966477,9.16156223 8.53655037,9.66082397 C8.20649974,9.75154722 7.85892218,9.8 7.5,9.8 C5.34564,9.8 3.6,8.05436 3.6,5.9 C3.6,3.74564 5.34564,2 7.5,2 C8.25720231,2 8.96391371,2.21564629 9.56208632,2.58889099 C9.21093154,3.03477505 8.90522155,3.53035437 8.65960858,4.06930826 Z M10.039752,11.9092121 C9.18013807,12.268098 8.3762698,12.7257301 7.67404571,13.2685613 C7.61590868,13.2673012 7.55787827,13.2666667 7.5,13.2666667 C5.2333313,13.2666667 2.73333333,14.2398137 2.73333333,15.6501517 C2.73333333,16.4856224 3.72087129,17.0530173 5.06026755,17.3515437 C5.0205709,17.6121482 5,17.8785941 5,18.150455 C5,18.4848007 5.03502266,18.8048355 5.10206067,19.1105539 C2.82214363,18.6693226 1,17.5729246 1,15.8236064 C1,13.2849981 4.40908813,11.5333333 7.5,11.5333333 C8.34830187,11.5333333 9.22056973,11.665274 10.039752,11.9092121 L10.039752,11.9092121 Z M14.5,11 C12.0142,11 10,8.9858 10,6.5 C10,4.0142 12.0142,2 14.5,2 C16.9858,2 19,4.0142 19,6.5 C19,8.9858 16.9858,11 14.5,11 Z M7,17.950315 C7,15.0211516 10.9335632,13 14.5,13 C18.0664368,13 22,15.0211516 22,17.950315 C22,23.3581238 7,23.3416599 7,17.950315 Z M14.5,9 C15.881,9 17,7.881 17,6.5 C17,5.119 15.881,4 14.5,4 C13.119,4 12,5.119 12,6.5 C12,7.881 13.119,9 14.5,9 Z M9,17.750175 C9,20.7453666 20,20.7545132 20,17.750175 C20,16.122862 17.115387,15 14.5,15 C11.884613,15 9,16.122862 9,17.750175 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default TeamIcon;

