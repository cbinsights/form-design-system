/* Allows you to combine functions */
function combine(...functions) {
  return (...args) =>
    functions
      .filter((func) => typeof func === 'function')
      .forEach((func) => func(...args));
}

export default combine;
