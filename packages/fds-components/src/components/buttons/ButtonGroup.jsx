import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => <div className="btngroup">{props.children}</div>;

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default ButtonGroup;
