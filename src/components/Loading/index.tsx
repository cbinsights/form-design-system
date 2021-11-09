import React from 'react';

export const VALID_SIZES = ['xs', 's', 'm'] as const;
export type Size = typeof VALID_SIZES[number];

export interface Props {
  size?: Size;
}

const Loading = ({ size = 'm', ...rest }: Props): JSX.Element => (
  <div {...rest} className={`fdsLoading--${size}`} role="img" />
);

export default Loading;
