import React, { useState } from 'react';
import Tippy from '@tippyjs/react';

// Will only render the `content` or `render` elements if the tippy is mounted to the DOM.
// Replace <Tippy /> with <LazyTippy /> component and it should work the same.

/* eslint react/prop-types: 0 */
function LazyTippy(props) {
  const [mounted, setMounted] = useState(false);

  const lazyPlugin = {
    fn: () => ({
      onMount: () => setMounted(true),
      onHidden: () => setMounted(false),
    }),
  };

  const computedProps = { ...props };

  computedProps.plugins = [lazyPlugin, ...(props.plugins || [])];

  if (props.render) {
    computedProps.render = (...args) => (mounted ? props.render(...args) : '');
  } else {
    computedProps.content = mounted ? props.content : '';
  }

  return <Tippy {...computedProps} />;
}

export default LazyTippy;
