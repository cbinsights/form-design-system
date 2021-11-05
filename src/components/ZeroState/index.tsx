import React from 'react';
import FDS from 'lib/dictionary/js/styleConstants';
import Icon from 'components/Icon';

export type Props = {
  Icon?: Icon;
  label?: string | number | React.ReactNode;
  height?: string;
};

const ZeroState = ({ Icon, label = '', height = '0px' }: Props): JSX.Element => (
  <article className="alignChild--center--center" style={{ minHeight: height }}>
    <section>
      {Icon && (
        <div className="alignChild--center--center" role="img">
          <Icon size="xl" color={FDS.FONT_COLOR_HINT} />
        </div>
      )}
      <p className="color--secondary padding--top--s align--center">{label}</p>
    </section>
  </article>
);

export default ZeroState;
