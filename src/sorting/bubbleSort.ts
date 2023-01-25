export function bubbleSort(array: number[]): number[] {
  let unsortedUntilIndex = array.length - 1;
  let performedSwaps = true;

  while (performedSwaps) {
    performedSwaps = false;

    for (let i = 0; i < unsortedUntilIndex; i++) {
      if (array[i] > array[i+1]) {
        const thisVal = array[i];
        const nextVal = array[i+1];

        array[i] = nextVal;
        array[i+1] = thisVal;
        performedSwaps = true;
      }
    }
    unsortedUntilIndex -= 1;
  }

  return array;
}
