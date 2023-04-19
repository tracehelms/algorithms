export const intersectionWithHashTable = (a: number[], b: number[]): number[] => {
  const result: number[] = [];
  const hash: Map<number, boolean> = new Map();

  for (let i = 0; i < a.length; i++) {
    hash.set(a[i], true);
  }

  for (var j = 0; j < b.length; j++) {
    if (hash.has(b[j])) {
      result.push(b[j]);
    }
  }

  return result;
};

export const naiveIntersection = (a: number[], b: number[]): number[] => {
  const result: number[] = [];

  for (let i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        result.push(a[i]);
        break;
      }
    }
  }

  return result;
};
