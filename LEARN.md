# Learn about Efficient Sorting

This document provides information and resources to help you understand the efficient sorting function implemented in this project.

## Sorting Algorithms

### Quicksort

Quicksort is an efficient in-place sorting algorithm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays.

### Mergesort

Mergesort is a divide and conquer algorithm that divides the input array into two halves, sorts each half, and then merges the sorted halves.

## How the Sorting Function Works

The sorting function implemented in this project intelligently selects between quicksort and mergesort based on the characteristics of the input array.

### Quick Sort

- Used for smaller arrays (<= 899 elements).
- Tail-recursive implementation for optimization.

### Merge Sort

- Used for larger arrays (> 899 elements).
- Recursively splits and merges the array.

## Further Reading

- [Quicksort - Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [Mergesort - Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
