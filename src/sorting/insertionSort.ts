/*
 * Insertion Sort
 *
 * Efficiency depends on the array to be sorted. 
 *   - For the best case, it's O(n). Minimal comparisons and no shifts.
 *   - For the average case, it's O(n^2 / 2). Some comparisons and shifts.
 *   - For the worst case, it's O(n^2). Lots of comparisons and shifts.
 *
 * This makes it sometimes much better than Selection Sort and sometimes as 
 * bad as Bubble Sort.
 *
 */
export function insertionSort(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    const tempValue = array[i];
    let position = i - 1;

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position -= 1;
      } else {
        break;
      }
    }

    array[position + 1] = tempValue;
  }

  return array;
}
