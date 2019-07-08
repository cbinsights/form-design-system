import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = (props) => <div className="btn-group">{props.children}</div>;

ButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default ButtonGroup;
