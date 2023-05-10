/*
 * Quick Sort
 *
 * Quick Sort uses recursion and divide-and-conquer to create a fast sorting
 * algorithm. The algorithm goes through and paritions the array, putting the
 * pivot value in place each time. It then recursively partitions the remaining
 * halves of the array.
 *
 * The efficiency of Quick Sort is O(n log n) for the best-case and the
 * average-case, which is a random array. This is as fast as sorting algorithms
 * get.
 *
 * It is O(n^2) for the worst-case, which is an array that is already sorted in
 * ascending or descending order. This is because the pivot constantly ends up
 * on the side of the array, and recursion doesn't happen on two halves, just
 * one long remainder.
 *
 */
export function quickSort(array: number[]): number[] {
  const newArray = array.slice();
  doQuickSort(newArray, 0, newArray.length - 1);
  return newArray;
}

function doQuickSort(array: number[], leftIndex: number, rightIndex: number) {
  if (rightIndex - leftIndex <= 0) {
    return;
  }

  const pivotIndex = partition(array, leftIndex, rightIndex);
  doQuickSort(array, leftIndex, pivotIndex - 1);
  doQuickSort(array, pivotIndex + 1, rightIndex);
  return;
}

function partition(ar: number[], left: number, right: number): number {
  const pivotIndex = right;
  const pivot = ar[pivotIndex];
  let rightPointer = right - 1;
  let leftPointer = left;

  while (true) {
    while (ar[leftPointer] < pivot) {
      leftPointer++;
    }

    while (ar[rightPointer] > pivot && rightPointer > 0) {
      rightPointer--;
    }

    if (leftPointer >= rightPointer) {
      break;
    }

    const temp = ar[leftPointer];
    ar[leftPointer] = ar[rightPointer];
    ar[rightPointer] = temp;

    leftPointer++;
  }

  const temp = ar[leftPointer];
  ar[leftPointer] = ar[pivotIndex];
  ar[pivotIndex] = temp;

  return leftPointer;
}
