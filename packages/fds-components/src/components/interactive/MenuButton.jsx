import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';

/**
 * @module MenuButton
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const MenuButton = (props) => {
  const { iconComponent, label, className, labelClassName, ...other } = props;

  return (
    <Button className={cx('iconButton', className)} {...other}>
      <Flex direction="column">
        <FlexItem className="iconButton-icon">{iconComponent}</FlexItem>
        <FlexItem shrink className={cx('typemod--tiny iconButton-label', labelClassName)}>
          {label}
        </FlexItem>
      </Flex>
    </Button>
  );
};

/**
 * TODO: all the proptypes
 */
MenuButton.propTypes = {
  /** Icon component to render in the button */
  iconComponent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Button label */
  label: PropTypes.string.isRequired,

  /** Disabled mode */
  disabled: PropTypes.bool,

  /** Class for label element */
  labelClassName: PropTypes.string,

  /** Optional className for inner Button component */
  className: PropTypes.string,
};

export default MenuButton;
