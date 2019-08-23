import React from 'react';
import cx from 'classnames';

const Button = ({ theme }) => (
  <button
    className={cx('niceButton', {
      'niceButton--primary': theme === 'primary--blue',
    })}
  >
    Hello World
  </button>
);

Button.defaultProps = {
  theme: 'primary--blue',
};

export default Button;
