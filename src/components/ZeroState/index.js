import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';

const ZeroState = ({ Icon, label = '', height = '0px', ...rest }) => (
  <article
    className="alignChild--center--center pointer-events-none"
    style={{ minHeight: height }}
  >
    <section {...rest}>
      {Icon && (
        <div className="alignChild--center--center" role="img">
          <Icon size="xl" color={FDS.FONT_COLOR_HINT} />
        </div>
      )}
      <p className="color--hint padding--top--half align--center">{label}</p>
    </section>
  </article>
);

ZeroState.propTypes = {
  /**
   * Pass in "only" a FDS Icon reference to display it (e.g. Icon={TableIcon})
   */
  Icon: PropTypes.func,

  /**
   * Text inside
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),

  /**
   * Min height of section
   */
  height: PropTypes.string,
};

export default ZeroState;
