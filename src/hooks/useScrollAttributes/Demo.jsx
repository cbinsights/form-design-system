import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';
import useScrollAttributes from '.';

const nested = {
  boxSizing: 'border-box',
  border: '1px dashed purple',
  display: 'inline-flex',
};

const intermediary = {
  padding: 12,
  border: `2px dashed ${FDS.COLOR_RED}`,
  overflowY: 'auto',
  marginBottom: '10px',
};

export const ExampleItem = (props) => (
  <div
    className="fontSize--xl display--inlineFlex alignChild--center--center media--xl color--red"
    style={{
      outline: '1px dotted red',
      background: 'pink',
      flexBasis: '300px',
    }}
  >
    {props.label}
  </div>
);

ExampleItem.propTypes = {
  label: PropTypes.string,
};

const Demo = () => {
  const ref = useRef();
  const [isAtScrollStart, isAtScrollEnd] = useScrollAttributes(ref);
  return (
    <>
      <div style={intermediary} ref={ref}>
        <div style={nested}>
          {new Array(20).fill(0).map((item, idx) => (
            <ExampleItem label={idx} key={idx} />
          ))}
        </div>
      </div>
      <p>{isAtScrollStart ? 'is at start' : 'is not at start'}</p>
      <p>{isAtScrollEnd ? 'is at end' : 'is not at end'}</p>
    </>
  );
};

export default Demo;
