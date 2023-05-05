export const isSubsetWithHashTable = (a: number[], b: number[]): boolean => {
  let largerArray: number[];
  let smallerArray: number[];

  if (a.length > b.length) {
    largerArray = a;
    smallerArray = b;
  } else {
    largerArray = b;
    smallerArray = a;
  }

  const hash: Map<number, boolean> = new Map();

  largerArray.forEach((v) => hash.set(v, true));

  for (let i = 0; i < smallerArray.length; i++) {
    if (!hash.has(smallerArray[i])) {
      return false;
    }
  }

  return true;
};
