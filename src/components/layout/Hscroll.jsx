import React, { useState, useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import rafSchd from 'raf-schd';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Hscroll = (props) => {
  const { enableFade, fadeColor, children, ...otherProps } = props;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtScrollEnd, setIsAtScrollEnd] = useState(false);
  const contentEl = useRef(null);

  const containerClassNames = cx('hscroll', `hscroll--fadeColor--${fadeColor}`, {
    'hscroll--enableFade': enableFade,
    'hscroll--scrolled': isScrolled,
    'hscroll--scrollEnd': isAtScrollEnd,
  });

  const onScroll = (e) => {
    const { scrollLeft, clientWidth } = e.target;
    const { scrollWidth } = contentEl.current;
    const scrollEnd = scrollWidth - clientWidth;

    rafSchd(setIsScrolled(Boolean(scrollLeft)));
    rafSchd(setIsAtScrollEnd(Boolean(scrollLeft === scrollEnd)));
  };

  return (
    <div className={containerClassNames} onScroll={onScroll} {...otherProps}>
      <div className="hscroll-overflowEl">
        <div ref={contentEl} className="hscroll-content">
          {children}
        </div>
      </div>
    </div>
  );
};

Hscroll.defaultProps = {
  enableFade: true,
  fadeColor: 'white',
};

Hscroll.propTypes = {
  /** adds gradient fades on overflowed sides */
  enableFade: PropTypes.bool,

  /** color of side gradients */
  fadeColor: PropTypes.oneOf(['white', 'haze']),

  /** React children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default Hscroll;
