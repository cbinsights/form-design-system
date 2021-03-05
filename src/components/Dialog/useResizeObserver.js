import { useRef, useLayoutEffect, useState, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// https://tobbelindstrom.com/blog/resize-observer-hook/
const useResizeObserver = () => {
  const [observerEntry, setObserverEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  const disconnect = useCallback(() => observer.current?.disconnect(), []);

  const observe = useCallback(() => {
    observer.current = new ResizeObserver(([entry]) => setObserverEntry(entry));
    if (node) observer.current.observe(node);
  }, [node]);

  useLayoutEffect(() => {
    observe();
    return () => disconnect();
  }, [disconnect, observe]);

  return [setNode, observerEntry];
};

export default useResizeObserver;
