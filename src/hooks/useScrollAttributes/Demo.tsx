import React, { useRef } from 'react';
import FDS from 'dictionary/js/styleConstants';
import useScrollAttributes from '.';

const nested = {
  boxSizing: 'border-box' as const,
  border: '1px dashed purple',
  display: 'inline-flex',
};

const intermediary = {
  padding: 12,
  border: `2px dashed ${FDS.COLOR_RED}`,
  overflowY: 'auto' as const,
  marginBottom: '10px',
};

interface ExampleItemProps {
  label?: string;
}

export const ExampleItem = (props: ExampleItemProps): JSX.Element => (
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

const Demo = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAtScrollStart, isAtScrollEnd] = useScrollAttributes(ref);
  return (
    <>
      <div style={intermediary} ref={ref}>
        <div style={nested}>
          {new Array(20).fill(0).map((_, idx) => (
            <ExampleItem label={`${idx}`} key={idx} />
          ))}
        </div>
      </div>
      <p>{isAtScrollStart ? 'is at start' : 'is not at start'}</p>
      <p>{isAtScrollEnd ? 'is at end' : 'is not at end'}</p>
    </>
  );
};

export default Demo;
