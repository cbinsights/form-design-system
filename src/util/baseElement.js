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
  } else if (href && onClick) {
    // This may seem unnecessary but needs to be here to enable the right priority
    Element = 'button';
  } else if (href) {
    Element = 'a';
  } else if (onClick) {
    Element = 'button';
  } else {
    Element = 'div';
  }
  return Element;
};

export default baseElement;
