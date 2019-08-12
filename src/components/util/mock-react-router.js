import React from 'react';
import PropTypes from 'prop-types';

// This exists because we don't want to import react-router,
// but I also don't want to import some seemingly custom
// component and give people the idea that they're allowed
// to do that

export const MockLink = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>
    {children}
  </a>
);

MockLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default MockLink;
