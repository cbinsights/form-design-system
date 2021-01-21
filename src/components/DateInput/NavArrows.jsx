import React from 'react';
import PropTypes from 'prop-types';

import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import IconButton from 'components/IconButton';
import ActionsArrowLeftIcon from 'lib/icons/react/ActionsArrowLeftIcon';
import ActionsArrowRightIcon from 'lib/icons/react/ActionsArrowRightIcon';

/**
 * Private component for DateInput that renders prev/next arrows.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const NavArrows = ({ onPreviousClick, onNextClick }) => (
  <div className="fdsDateInput-navArrows alignChild--right--center">
    <Flex noGutters>
      <FlexItem shrink>
        <IconButton
          onClick={onPreviousClick}
          Icon={ActionsArrowLeftIcon}
          label="Previous Month"
        />
      </FlexItem>
      <FlexItem shrink>
        <IconButton
          onClick={onNextClick}
          Icon={ActionsArrowRightIcon}
          label="Next Month"
        />
      </FlexItem>
    </Flex>
  </div>
);

NavArrows.propTypes = {
  /** callback for clicking on left arrow */
  onPreviousClick: PropTypes.func,

  /** callback for clicking on right arrow */
  onNextClick: PropTypes.func,
};

export default NavArrows;
