import Sort from './index.js';

// Example usage:
  const unsortedArray = [];
  for (let i = 1900; i > 0; i--) {
    unsortedArray.push(i);
  }
  const sortedArray = Sort(unsortedArray);

  function isFlatArraySorted(array, sortingOrder = 'ascending') {
    for (let i = 0; i < array.length - 1; i++) {
      if (sortingOrder === 'ascending' && array[i] > array[i + 1]) {
        return false;
      } else if (sortingOrder === 'descending' && array[i] < array[i + 1]) {
        return false;
      }
    }
    return true;
  }

  if(isFlatArraySorted(sortedArray)) {
    console.log('test passed');
  }else{
    console.log('test failed');
  }