# Efficient Sort Function in JavaScript

[![DeepScan grade](https://deepscan.io/api/teams/23370/projects/26710/branches/851719/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=23370&pid=26710&bid=851719)
[![DeepSource](https://app.deepsource.com/gh/IntegerAlex/efficient-sorting.svg/?label=resolved+issues&show_trend=true&token=Mq0EjM82kW9g-fqGW92fzEBe)](https://app.deepsource.com/gh/IntegerAlex/efficient-sorting/)
[![CodeScene Code Health](https://codescene.io/projects/51175/status-badges/code-health)](https://codescene.io/projects/51175)
![NPM Downloads](https://img.shields.io/npm/dt/efficient-sorting?style=plastic&logo=npm)
![NPM Version](https://img.shields.io/npm/v/efficient-sorting)

This project provides a JavaScript implementation of an efficient sorting function that dynamically determines the sorting method based on the characteristics of the input array.

## Introduction

The goal of this project is to create a sorting function that intelligently selects the most suitable sorting algorithm based on the size and nature of the input array. By dynamically choosing between quicksort and mergesort, the function aims to optimize performance for different scenarios.

## Usage

```javascript
npm install efficient-sorting
```

```javascript
    import Sort from 'efficient-sorting'
    let array = [10,20,45,2,1,19,17]
    console.log(Sort(array))
```

To use the sorting function in your JavaScript project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/IntegerAlex/efficient-sorting.git
