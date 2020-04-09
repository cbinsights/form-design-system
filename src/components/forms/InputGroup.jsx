import React from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/layout/Flex';
import FlexItem from 'components/layout/FlexItem';

/**
 * Returns an array InputGroup can use to set grow/shrink on flex items
 *
 * @param {Number} childCount - number of react children passed to InputGroup
 * @param {Array} userSettings - `flexSettings` prop optionally set by user
 * @returns {Array} e.g. ['shrink', 'grow', 'shrink']
 */
export const getFlexSettings = (childCount, userSettings) => {
  // always obey a valid `flexSettings` prop when passed by a user
  if (userSettings && userSettings.length === childCount) return userSettings;

  // if user did not pass the `flexSettings` prop, set a sensible default
  const defaultSettings = new Array(childCount).fill('grow');
  defaultSettings[childCount - 1] = 'shrink'; // always shrink last item

  // also shrink the first item when there's 3 or more items
  if (defaultSettings.length >= 3) {
    defaultSettings[0] = 'shrink';
  }

  return defaultSettings;
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const InputGroup = ({ children, flexSettings }) => {
  const growShrinkArr = getFlexSettings(React.Children.count(children), flexSettings);

  return (
    <div className="fdsInputGroup">
      <Flex align="center" noGutters>
        {React.Children.map(children, (child, i) => (
          <FlexItem shrink={growShrinkArr[i] === 'shrink'}>{child}</FlexItem>
        ))}
      </Flex>
    </div>
  );
};

InputGroup.propTypes = {
  /** `input` or `select` elements */
  children: PropTypes.arrayOf(PropTypes.node).isRequired,

  /**
   * Controls how the input segments should grow or shrink to fill remaining space.
   *
   * `shrink` - segment to shrink to natural width of the input element
   *
   * `grow` - grow the input element to fill remaining space
   */
  flexSettings: PropTypes.arrayOf(PropTypes.oneOf(['shrink', 'grow'])),
};

export default InputGroup;
