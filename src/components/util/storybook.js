/**
 * Storybook helpers
 */

/**
 * @param {Array} values list of possible prop values
 * @returns {Object} options object for storybook knobs
 */
export const arrayToOptions = (values) =>
  values.reduce((o, value) => ({
    ...o,
    ...{ [value]: value.toString() },
  }));

/**
 * @Object
 * useful background images for stories
 */
export const storyBackgrounds = {
  diagonalLine:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVQoU2NkIAIcPnzYl5GQOpAiW1vbzXgVwhSBDMOpEFkRToXoirAqxKYIQyEuRSgK8SmCKySkCKyQGEUghQDUkiahD/fFjQAAAABJRU5ErkJggg==)',
  check:
    'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAHElEQVQYV2M8fPiwLwMOwAiStLW13YxNftBJAgAx2BqeI9XcBAAAAABJRU5ErkJggg==)',
};
