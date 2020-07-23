// How do you solve problems:
// How do you improve
// 1. Devise a plan for solving problems before writing a line of code.
// 2. Master common problem solving patterns
// Some Patterns
// +Frequency counter
// +Multiple Pointers
// +Sliding Window
// + Divide and Conquer
// +Dynamic Programming
// + Greedy Algorithms
// + Backtracking

// Frequency Counters
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.

// Example for Frequency Counter 
// Write a function, which accepts two arrays, returns true if every value in te array wquared in the second array.
// Naive solution: Time complexity: O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }

  return true;
}

// O(n)
// Better solution which is Frequency Counter Pattern
// Idea of Frequency counter is to use an Object, way of breaking content of arrays
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// Second exercise;
// Anagram Given two strings write a function to determine if the second string is an anagram of the first
// 'aaz', 'zza' // false
// 'anagram' 'anagaram' // true;
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let anagramStr1 = {};
  let anagramStr2 = {};

  for (const val of str1.split('')) {
    anagramStr1[val] = (anagramStr1[val] || 0) + 1;
  }

  for (const val of str2.split('')) {
    anagramStr2[val] = (anagramStr2[val] || 0) + 1;
  }

  for (const key in anagramStr1) {
    if (!(key in anagramStr2)) {
      return false;
    }

    if (anagramStr2[key] !== anagramStr1[key]) {
      return false;
    }
  }

  return true;
}

// My first solution
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const obj = str1.split('').reduce(function(acc, val) {
    return acc[val] ? acc[val]++ : acc[val] = 1, acc;
  }, {});

  for (let i = 0; i < str2.length; i++) {
    const element = str2[i];
    if (!obj[element]) {
      return false;
    } else {
      obj[element]--;
    }
  }

  return true;
}

// this one yields from upper case letters
var isAnagram = function(str1, second) {
  if (str1.length !== second.length) return false;
    const str2 = second.toLowerCase();
    const obj = str1.toLowerCase().split('').reduce(function(acc, val) {
      return acc[val] ? acc[val]++ : acc[val] = 1, acc;
    }, {});
  
    for (let i = 0; i < str2.length; i++) {
      const element = str2[i];
      if (!obj[element]) {
        return false;
      } else {
        obj[element]--;
      }
    }
  
    return true;
  };

// Colt's solution:
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // If letter exist, increment, otherwise set to 1;
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}


// Multiple Pointers Pattern:
// Creating pointer or values that correspond to an index or position and move toward the beginning,
// end or middle based on a certain condition. Very efficient for solving problems
// with minimal space complexity as well.

// return an array which two sum equal to zero.
// Beginning and from end approach
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// countUniqueValues
// write a function which excepts a sorted Array, and counts the unique values
// in the array. There can be negative numbers in the array, but sorted;

// [1, 1, 1, 1, 1, 2] // 2
// my first solution
function countUniqueValues(arr) {
  var i = 0;
  var j = 1;

  while (j <= arr.length) {
    if (arr[i] !== arr[j]) i++, arr[i] = arr[j];
    j++;
  }
  return i;
}

function countUniqueValues(a){
  if (a.length === 0)  return 0;
  
    var i = 0;
    var j = 1;
    while (j <= a.length) {
      if (a[i] !== a[j]) {
        i++;
        a[i] = a[j];
      }
      j++;
    }
    return i;
  }