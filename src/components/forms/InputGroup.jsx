import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const InputGroup = ({ children }) => (
  <div className="fdsInputGroup">
    <Flex align="center" noGutters>
      {React.Children.map(children, (child, i) => (
        <FlexItem shrink={i === 0 || i === children.length - 1}>{child}</FlexItem>
      ))}
    </Flex>
  </div>
);

InputGroup.propTypes = {
  /** `input` or `select` elements */
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default InputGroup;
