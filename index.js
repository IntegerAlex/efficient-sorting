function quickSort(arr) {
    return tailRecursiveQuickSort(arr, 0, arr.length - 1);
  }
  
  function tailRecursiveQuickSort(arr, start, end) {
    while (start < end) {
      const pivotIndex = partition(arr, start, end);
  
      if (pivotIndex - start < end - pivotIndex) {
        tailRecursiveQuickSort(arr, start, pivotIndex - 1);
        start = pivotIndex + 1;
      } else {
        tailRecursiveQuickSort(arr, pivotIndex + 1, end);
        end = pivotIndex - 1;
      }
    }
  
    return arr;
  }
  
  function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start - 1;
  
    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    return i + 1;
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
export default function Sort(arr) {
    // Determine the best sorting method based on array characteristics
    if (arr.length > 899) {
      // Use mergesort for larger arrays
    //   console.log("Using mergesort");
      return mergeSort(arr);
    } else {
      // Use quicksort for smaller arrays
    //   console.log("Using quicksort");
      return quickSort(arr);
    }
  }
  
