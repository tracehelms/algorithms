import { bubbleSort } from '../bubbleSort';


describe('bubbleSort', function() {
  it('works', () => {
    expect(bubbleSort([2,3,1])).toEqual([1,2,3]);
    expect(bubbleSort([2,3,1,8,6,7,9,5,4])).toEqual([1,2,3,4,5,6,7,8,9]);
  });
});

