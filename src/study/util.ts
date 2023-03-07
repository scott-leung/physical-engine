export function idGenerator() {
  let id = 0;
  return () => id++;
}

export const getUniqueID = idGenerator();
