import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';
import baseElement from 'util/baseElement';

const WrapperComponent = (wrapperProps) => wrapperProps.children;

export const GroupButton = (props) => {
  const {
    Wrapper = WrapperComponent,
    isActive,
    Icon,
    label,
    Link,
    isFirstButton,
    isLastButton,
    ...rest
  } = props;

  const Element = baseElement({ href: rest.href, onClick: true, as: Link });

  const rootClass = cc([
    {
      'groupbtn--disabled': props.disabled,
      'groupbtn--active': isActive,
      'groupbtn--first': isFirstButton,
      'groupbtn--last': isLastButton,
    },
    'groupbtn',
    'border--focus--noTransition',
    'transition--default',
  ]);

  return (
    <Wrapper>
      <Element {...rest} className={rootClass}>
        {Icon && (
          <div className="margin--right--s">
            <Icon size="xs" />
          </div>
        )}
        <span className="groupbtn-label">{label}</span>
      </Element>
    </Wrapper>
  );
};

GroupButton.propTypes = {
  /** Displays active button style when true */
  isActive: PropTypes.bool,

  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.elementType,

  /** Text that appears in GroupButton */
  label: PropTypes.string,

  /** Controls whether button is disabled or not (works for
   * anchor tags as well, visually) */
  disabled: PropTypes.bool,

  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func,

  /**
   * A component to wrap the entire group button. The
   * `wrapper` must render the children prop passed into it
   * to render the GroupButton.
   */
  Wrapper: PropTypes.elementType,

  /** Assigns the first button styling. */
  isFirstButton: PropTypes.bool,

  /** Assigns the last button styling. */
  isLastButton: PropTypes.bool,
};

export default GroupButton;
