import { isSubsetWithHashTable } from '../subset';
import { largeSortedArray, mediumSortedArray } from '../../util';

describe('isSubsetWithHashTable', function() {
  test('it works', function() {
    expect(isSubsetWithHashTable([1,2,3,4,5], [1,2])).toBe(true);
    expect(isSubsetWithHashTable([1,2,3,4,5], [2,5])).toBe(true);
    expect(isSubsetWithHashTable([1,2,3,4,5], [1,6])).toBe(false);
    expect(isSubsetWithHashTable([1,2,3,4,5], [])).toBe(true);
  });

  test('it is fast for big arrays', function() {
    const t0 = performance.now();
    const isSubset = isSubsetWithHashTable(largeSortedArray, mediumSortedArray);
    const t1 = performance.now();
    console.log(`Execution time for finding if an array is a subset of another array with a hash table took ${t1 - t0} milliseconds.`);

    expect(isSubset).toEqual(true);
  });
});
