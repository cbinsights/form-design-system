import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import baseElement from '../../util/baseElement';

export const GroupButton = (props) => {
  const {
    isActive,
    Icon,
    label,
    Link,
    Wrapper,
    isFirstButton,
    isLastButton,
    ...rest
  } = props;

  const Element = baseElement({ href: rest.href, as: Link });

  const rootClass = cx('groupbtn', {
    'groupbtn--disabled': props.disabled,
    'groupbtn--active': isActive,
    'groupbtn--first': isFirstButton,
    'groupbtn--last': isLastButton,
  });

  return (
    <Wrapper>
      <Element {...rest} className={rootClass}>
        {Icon && <Icon size="xs" className="groupbtn-icon" />}
        {label}
      </Element>
    </Wrapper>
  );
};

GroupButton.defaultProps = {
  Wrapper: (props) => props.children,
};

GroupButton.propTypes = {
  /** Displays active button style when true */
  isActive: PropTypes.bool,

  /**
   * Pass **only** react-router `Link` here. You may **not**
   * pass anything else here: SFC, Class Component, etc (even
   * if they use react-router `Link` underneath the hood).
   */
  Link: PropTypes.func,

  label: PropTypes.string,

  disabled: PropTypes.bool,

  /** Specify a fds-icon component */
  Icon: PropTypes.func,

  /**
   * A component to wrap the entire group button. The
   * `wrapper` must render the children prop passed into it
   * to render the GroupButton.
   */
  Wrapper: PropTypes.elementType,

  /** For internal use: Assigns the first button styling. */
  isFirstButton: PropTypes.bool,

  /** For internal use: Assigns the last button styling. */
  isLastButton: PropTypes.bool,
};

export default GroupButton;
