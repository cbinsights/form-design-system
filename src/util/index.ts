export const noop = (..._args: unknown[]): void => {};
/**
 * method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would, with its types
 */
export const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;
