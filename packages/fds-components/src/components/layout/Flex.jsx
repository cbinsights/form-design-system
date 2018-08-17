import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @description map of alignment values to class names
 */
const DirectionPropMap = {
  row: 'flex--row',
  column: 'flex--column',
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Flex = (props) => {
  const classNames = cx(
    'flex',
    DirectionPropMap[props.direction],
    {
      'flex--wrap': props.wrap,
      'flex--noGutters': props.noGutters,
    },
    props.className
  );
  return <div className={classNames}>{props.children}</div>;
};

Flex.defaultProps = {
  direction: 'row',
  noGutters: false,
};

// TODO: justify props
Flex.propTypes = {
  direction: PropTypes.oneOf(Object.keys(DirectionPropMap)),
  noGutters: PropTypes.bool,
  wrap: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Flex;
