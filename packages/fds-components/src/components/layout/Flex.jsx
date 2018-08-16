import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description map of alignment props to class names
 */
const DIRECTIONS = {
  row: 'flex--row',
  column: 'flex--column',
};

/**
 * @param {Object} props react props
 */
const Flex = (props) => {
  const classNames = cx('foo', props.className);

  return <div className={classNames} />;
};

Flex.defaultProps = {
  direction: 'row',
  noGutters: false,
};

// TODO: justify props
Flex.propTypes = {
  direction: PropTypes.oneOf(Object.keys(DIRECTIONS)),
  noGutters: PropTypes.bool,
  className: PropTypes.string,
};

export default Flex;
