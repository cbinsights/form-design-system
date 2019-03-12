const customPropTypes = {};

/**
 * Validates prop as number within a range
 * @param {Number} start range start
 * @param {Number} end range end
 */
customPropTypes.range = (start, end) => (props, propName, componentName) => {
  const val = props[propName];
  if (typeof val !== 'number') {
    return new Error(`'progress' prop in ${componentName} must be a number`);
  }
  if (val < start || val > end) {
    return new Error(`'progress' prop in ${componentName} must between 0 and 100`);
  }
  return null;
};

export default customPropTypes;
