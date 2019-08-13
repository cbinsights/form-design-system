import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

/**
 * @module MuiButtonShim
 * DO NOT DOCUMENT (not for public use)
 *
 * This shim replaces the material-ui button use cases in FDS (until we have a standard
 * button component).
 * Renders a `button` element with some basic style overrides.
 */
const MuiButtonShim = ({ label, Icon, isRound, onClick, className }) => {
  let buttonContent = label;

  if (Icon && !label) {
    buttonContent = Icon;
  }

  if (Icon && label) {
    buttonContent = (
      <Flex align="center" noGutters>
        <FlexItem shrink>
          <div className="margin--right--half">{Icon}</div>
        </FlexItem>
        {label && <FlexItem>{label}</FlexItem>}
      </Flex>
    );
  }

  const classNames = cx(
    'fdsButton alignChild--center--center padding--all--half',
    { 'fdsButton--round': isRound },
    className
  );

  return (
    <button className={classNames} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

MuiButtonShim.propTypes = {
  /** Optional `Icon` component to render */
  Icon: PropTypes.element,

  /** Button label */
  label: PropTypes.string,

  /** Makes the button a circle */
  isRound: PropTypes.bool,

  /** click handler */
  onClick: PropTypes.func,

  /** custom class name */
  className: PropTypes.string,
};

export default MuiButtonShim;
