function reverse(str) {
  return str.split('').reverse().join('')
}

console.log(reverse('eralp'))

function reverse2(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

console.log(reverse2('susan'))

// Write a function that calculates the sum of all numbers from 1 to (and including)
// some number number n.
// Example of O(n)
function addSum(n) {
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Same solution less code with math formula Example of O(1)
function addUpTo(n) {
  return n * (n + 1) / 2; // (1 + N)*(N/2)
}

// Timing the code performance.
// var t1 = performance.now();
// // addSum(1000000000);
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// count up and down Example of O(n)
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('Ath the top!\nGoing down...');
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
}

// print all pairs nested loop. Example of O(n2)
function printAllPairs(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);
    }
  }
}

// Log at least 5
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}


function addUpTo(n) {
  return n * (n + 1) / 2;
}

// addUpTo(6); // 21

function addUpTo(n) {
  var total = 0;
  for (var i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// addUpTo(6) // 21


// var t1 = performance.now();
// addUpTo(10000000000);
// var t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);