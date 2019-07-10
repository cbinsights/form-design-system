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
  const {
    iconComponent,
    label,
    className,
    labelClassName,
    disabled,
    active,
    ...other
  } = props;

  return (
    <Button
      className={cx(
        'menuButton',
        {
          'menuButton--active': active,
          'menuButton--disabled': disabled,
        },
        className
      )}
      disabled={disabled}
      variant="text"
      {...other}
    >
      <Flex className="menuButton-inner" direction="column" noGutters>
        <FlexItem className="menuButton-icon">{iconComponent}</FlexItem>
        <FlexItem
          shrink
          className={cx('typemod--tiny typemod--dark menuButton-label', labelClassName)}
        >
          {label}
        </FlexItem>
      </Flex>
    </Button>
  );
};

MenuButton.propTypes = {
  /** Icon component to render in the button */
  iconComponent: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Button label */
  label: PropTypes.string.isRequired,

  /** Disabled mode */
  disabled: PropTypes.bool,

  /** Active mode */
  active: PropTypes.bool,

  /** Class for label element */
  labelClassName: PropTypes.string,

  /** Optional className for inner Button component */
  className: PropTypes.string,
};

export default MenuButton;
