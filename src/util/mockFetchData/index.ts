export const mockFetchData = async <T>(data: T, ms?: number): Promise<T> => {
  await sleep(ms ?? 0);
  return data;
};

const sleep = (ms: number) => {
  if (ms > 0) {
    return new Promise((r) => setTimeout(r, ms));
  }

  return new Promise((r) => r);
};
