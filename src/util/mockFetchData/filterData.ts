export const filterByStringProp = <T>(
  data: T[],
  prop: keyof T,
  op: 'equals' | 'contains' | 'starts-with',
  value: string
): T[] => {
  return data.filter((row: T) => {
    const v = value.toLowerCase();
    const p = row[prop];
    if (typeof p === 'string') {
      const lower = p.toLowerCase();
      if (op === 'equals') {
        return lower === v;
      }
      if (op === 'contains') {
        return lower.includes(v);
      }
      if (op === 'starts-with') {
        return lower.startsWith(v);
      }
    }
  });
};
