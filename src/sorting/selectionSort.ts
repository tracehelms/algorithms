/*
 * Selection Sort
 *
 * Efficiency is O(n^2) but is technically faster than Bubble Sort
 * due to reduced number of swaps
 *
 */
export function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length - 1; i++) {
    let lowestIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowestIndex]) {
        lowestIndex = j;
      }
    }

    if (lowestIndex !== i) {
      const thisVal = array[i];
      const lowestVal = array[lowestIndex];

      array[i] = lowestVal;
      array[lowestIndex] = thisVal;
    }
  }

  return array;
}
