import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import FDS from '../../../lib/dictionary/js/styleConstants';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const IconInput = ({ IconLeft, IconRight, children }) => {
  const classNames = cx('fdsIconInput', {
    'fdsIconInput--hasStartIcon': Boolean(IconLeft),
    'fdsIconInput--hasEndIcon': Boolean(IconRight),
  });

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

IconInput.propTypes = {
  /** An `input` element child */
  children: PropTypes.node,

  /**
   * FDS Icon _reference_
   * `IconLeft={StarFilledIcon}`
   */
  IconLeft: PropTypes.func,

  /**
   * FDS Icon _reference_
   * `IconRight={StarFilledIcon}`
   */
  IconRight: PropTypes.func,
};

export default IconInput;
