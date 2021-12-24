export type GenericArgsFunction = (...args: unknown[]) => unknown;

/* Allows you to combine functions */
const combine = (...functions: GenericArgsFunction[]): GenericArgsFunction => {
  return (...args: unknown[]) => {
    functions
      .filter((func) => typeof func === 'function')
      .forEach((func) => func(...args));
  };
};

export default combine;
