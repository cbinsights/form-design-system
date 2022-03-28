/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const PhoneIcon = ({
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
			<path d="M12,2 C6.4889971,2 2,6.4889971 2,12 C2,17.511003 6.4889971,22 12,22 C17.511003,22 22,17.511003 22,12 C22,6.4889971 17.511003,2 12,2 Z M12,4 C16.430123,4 20,7.5698774 20,12 C20,16.430123 16.430123,20 12,20 C7.5698774,20 4,16.430123 4,12 C4,7.5698774 7.5698774,4 12,4 Z M16.8205268,15.6949996 C16.6154807,16.3147801 15.6109518,16.9122358 15.159456,16.9558224 C14.7079602,17.0004721 14.2850525,17.1758817 12.2069888,16.2924553 C9.70601748,15.2293669 8.12676793,12.4642741 8.00452889,12.2878015 C7.88130405,12.1102657 7,10.8494429 7,9.54397043 C7,8.23849793 7.63584017,7.59639257 7.86158808,7.33168357 C8.08733599,7.06591148 8.35350164,7 8.51813003,7 C8.68177261,7 8.846401,7 8.98934181,7.00637853 C9.16481399,7.01382015 9.35901633,7.02338794 9.54336069,7.46456961 C9.76220801,7.98973526 10.2403204,9.30158628 10.3014399,9.43447233 C10.3625594,9.56735837 10.403963,9.72256927 10.3221417,9.89904194 C10.2403204,10.0755146 10.1989168,10.1860758 10.0766778,10.3412867 C9.95345296,10.4964976 9.81839854,10.6867904 9.70798908,10.8058563 C9.58476424,10.9376793 9.45661041,11.0822593 9.59955122,11.3469683 C9.74347783,11.6127404 10.2363772,12.4812835 10.9678398,13.1839849 C11.9082918,14.08761 12.6998882,14.3672023 12.9463379,14.5011514 C13.1927875,14.6340375 13.3357284,14.6117126 13.479655,14.4341768 C13.6235816,14.2577042 14.0947934,13.6602485 14.258436,13.3944764 C14.4220785,13.1287044 14.5867069,13.1733541 14.8124548,13.2615904 C15.0382027,13.3498267 16.2477778,13.9919321 16.4932417,14.1248181 C16.7396913,14.2577042 16.9033339,14.3236157 16.9644534,14.4341768 C17.025573,14.5436749 17.025573,15.0752191 16.8205268,15.6949996 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default PhoneIcon;

