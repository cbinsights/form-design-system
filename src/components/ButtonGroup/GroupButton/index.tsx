import React from 'react';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import Icon from 'components/Icon';

const WrapperComponent = ({ children }: { children: JSX.Element }): JSX.Element =>
  children;

export interface GroupButtonProps {
  /** Displays active button style when true */
  isActive?: boolean;

  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link?: JSX.Element;

  /** Text that appears in GroupButton */
  label?: string;

  /** Controls whether button is disabled or not (works for
   * anchor tags as well, visually) */
  disabled?: boolean;

  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon?: Icon;

  /**
   * A component to wrap the entire group button. The
   * `wrapper` must render the children prop passed into it
   * to render the GroupButton.
   */
  Wrapper?: (props: { children: React.ReactNode }) => JSX.Element;

  /** Assigns the first button styling. */
  isFirstButton?: boolean;

  /** Assigns the last button styling. */
  isLastButton?: boolean;

  /** Specifies a URL to link to.  */
  href?: string;

  onClick: () => void;
}

export const GroupButton = (props: GroupButtonProps): JSX.Element => {
  const {
    Wrapper = WrapperComponent,
    isActive,
    Icon,
    label,
    Link,
    isFirstButton,
    isLastButton,
    href,
    ...rest
  } = props;

  const Element = baseElement({ href: href, onClick: true, as: Link });

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

export default GroupButton;
