import { intersectionWithHashTable, naiveIntersection } from '../intersection';
import { largeSortedArray, mediumSortedArray } from '../../util';

describe('intersectionWithHashTable', function() {
  test('it works', function() {
    expect(intersectionWithHashTable([1,2,3,4,5], [0,2,4,6,8])).toStrictEqual([2,4]);
  });

  test('it is fast for big arrays', function() {
    const t0 = performance.now();
    const intersection = intersectionWithHashTable(largeSortedArray, mediumSortedArray);
    const t1 = performance.now();
    console.log(`Execution time for finding an array intersection with a hash table took ${t1 - t0} milliseconds.`);

    expect(intersection).toEqual(mediumSortedArray);
  });
});

describe('naiveIntersection', function() {
  test('it works', function() {
    expect(naiveIntersection([1,2,3,4,5], [0,2,4,6,8])).toStrictEqual([2,4]);
  });

  test('it is fast for big arrays', function() {
    const t0 = performance.now();
    const intersection = naiveIntersection(largeSortedArray, mediumSortedArray);
    const t1 = performance.now();
    console.log(`Execution time for finding an array intersection naively took ${t1 - t0} milliseconds.`);

    expect(intersection).toEqual(mediumSortedArray);
  });
  
});

