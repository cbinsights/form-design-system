// Adapted from the following:
// https://github.com/davidtheclark/no-scroll/blob/master/index.js
/* eslint-disable */

let isOn = false;
let scrollbarSize: number;

function getScrollbarSize() {
  if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

  const doc = document.documentElement;
  const dummyScroller = document.createElement('div');
  dummyScroller.setAttribute(
    'style',
    'width:99px;height:99px;' + 'position:absolute;top:-9999px;overflow:scroll;'
  );
  doc.appendChild(dummyScroller);
  scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
  doc.removeChild(dummyScroller);
  return scrollbarSize;
}

function hasScrollbar() {
  return document.documentElement.scrollHeight > window.innerHeight;
}

function on() {
  if (typeof document === 'undefined' || isOn) return;
  const doc = document.documentElement;
  if (hasScrollbar()) {
    doc.style.width = `calc(100% - ${getScrollbarSize()}px)`;
  } else {
    doc.style.width = '100%';
  }
  doc.style.overflow = 'hidden';
  isOn = true;
}

function off() {
  if (typeof document === 'undefined' || !isOn) return;
  const doc = document.documentElement;
  doc.style.width = '';
  doc.style.overflow = '';
  isOn = false;
}

function toggle() {
  if (isOn) {
    off();
    return;
  }
  on();
}

export default {
  on,
  off,
  toggle,
};
