import React from 'react';
import cc from 'classcat';

import FDS from 'dictionary/js/styleConstants';
import { IconProps } from 'components/Icon';

export interface IconInputProps {
  /** An `input` element child */
  children?: React.ReactNode;

  /**
   * FDS Icon _reference_
   * `IconLeft={StarFilledIcon}`
   */
  IconLeft?: React.ComponentType<IconProps>;

  /**
   * FDS Icon _reference_
   * `IconRight={StarFilledIcon}`
   */
  IconRight?: React.ComponentType<IconProps>;
}

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const IconInput = ({ IconLeft, IconRight, children }: IconInputProps): JSX.Element => {
  const classNames = cc([
    {
      'fdsIconInput--hasStartIcon': Boolean(IconLeft),
      'fdsIconInput--hasEndIcon': Boolean(IconRight),
    },
    'fdsIconInput',
  ]);

  return (
    <div className={classNames}>
      {IconLeft && (
        <span className="fdsIconInput-icon fdsIconInput-icon--start alignChild--center--center">
          <IconLeft size="xs" color={FDS.FONT_COLOR_SECONDARY} />
        </span>
      )}
      {children}
      {IconRight && (
        <span className="fdsIconInput-icon fdsIconInput-icon--end alignChild--center--center">
          <IconRight size="xs" color={FDS.FONT_COLOR_SECONDARY} />
        </span>
      )}
    </div>
  );
};

export default IconInput;
