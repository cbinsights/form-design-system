import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

/**
 * @module ButtonBase
 * Renders a `button` element with some basic style overrides.
 */
const ButtonBase = ({ label, Icon, isRound }) => {
  let buttonContent = label;

  if (Icon) {
    buttonContent = (
      <Flex align="center" noGutters>
        <FlexItem shrink>
          <div className="margin--right--half">{Icon}</div>
        </FlexItem>
        {label && <FlexItem>{label}</FlexItem>}
      </Flex>
    );
  }

  const classNames = cx('fdsButton alignChild--center--center padding--all--half', {
    'fdsButton--round': isRound,
  });

  return <button className={classNames}>{buttonContent}</button>;
};

ButtonBase.propTypes = {
  /** Optional `Icon` component to render */
  Icon: PropTypes.element,

  /** Button label */
  label: PropTypes.string,

  /** Makes the button a circle */
  isRound: PropTypes.bool,
};

export default ButtonBase;
