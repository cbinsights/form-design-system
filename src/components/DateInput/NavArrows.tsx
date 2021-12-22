import React from 'react';

import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import IconButton from 'components/IconButton';
import ActionsArrowLeftIcon from 'icons/react/ActionsArrowLeftIcon';
import ActionsArrowRightIcon from 'icons/react/ActionsArrowRightIcon';

export interface NavArrowProps {
  /** callback for clicking on left arrow */
  onPreviousClick?: () => void;

  /** callback for clicking on right arrow */
  onNextClick?: () => void;
}
/**
 * Private component for DateInput that renders prev/next arrows.
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const NavArrows = ({ onPreviousClick, onNextClick }: NavArrowProps): JSX.Element => (
  <div className="fdsDateInput-navArrows alignChild--right--center">
    <Flex noGutters>
      <FlexItem shrink>
        <IconButton
          onClick={() => onPreviousClick?.()}
          Icon={ActionsArrowLeftIcon}
          label="Previous Month"
        />
      </FlexItem>
      <FlexItem shrink>
        <IconButton
          onClick={() => onNextClick?.()}
          Icon={ActionsArrowRightIcon}
          label="Next Month"
        />
      </FlexItem>
    </Flex>
  </div>
);

export default NavArrows;
