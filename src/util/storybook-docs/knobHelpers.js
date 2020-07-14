/**
 * Creates a knobs options object where labels match values.
 *
 * @param {Array} values list of possible prop values
 * @returns {Object} options object for storybook knobs
 */
export const arrayToOptions = (values) =>
  values.reduce(
    (o, val) => ({
      ...o,
      ...{ [val]: val.toString() },
    }),
    {}
  );

export default arrayToOptions;
