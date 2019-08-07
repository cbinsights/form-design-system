const path = require('path');

/**
 * @param {String} filepath
 * @returns {String} name of react component for icon
 */
const getComponentName = (filepath) => `${path.basename(filepath, '.svg')}Icon`;

module.exports = getComponentName;
