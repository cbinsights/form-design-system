import PropTypes from 'prop-types';

const validRef = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);

export default validRef;
