/**
 * Common pattern where we use href to generate whether
 * an href or a button is returned, and also allow a master
 * override where you can specify any element / component as
 * the root
 */
const baseElement = ({ href, onClick, as }) => {
  let Element;
  if (as) {
    Element = as;
  } else if (href || (href && onClick)) {
    Element = 'a';
  } else if (onClick) {
    Element = 'button';
  } else {
    Element = 'div';
  }
  return Element;
};

export default baseElement;
