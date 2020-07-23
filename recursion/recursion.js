// Call Stack example
function takeShower() {
  return 'Showering!'
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log('Ok ready to start studying!');
}

wakeUp();

// Recursive count numbers first example
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// Recursive second example
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// Factorial example with for loop
function factorial1(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// Factorial with recursive way
function factorial2(num) {
  if (num === 1) return 1; // If factorial is 1 we should return one immediately; also to stop recursion
  return num * factorial2(num - 1);
}

// *************** Helper method recursion ******************************
// Collect odd numbers with helper method function inside function
function collectOddValues1(arr) {
  let result = []; // Place holder for result array

  function helper(helperInput) { // Helper recursive function takes array
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// *************** Pure recursion ************
function collectOddValues2(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);

  result = result.concat(collectOddValues2(arr.slice(1)));
  return result;
}

// Write a function which accepts a base and exponent. It should return
// the power of the base to the exponent mimic Math.pow()
function power1(num, pow) {
  if (pow === 0) return 1;
  if (pow < 0) {
    num = 1 / num;
    pow = -pow;
  } 
  var n = Math.floor(pow / 2);
  return (pow % 2 ===0) ? power1(num * num, n) : num * power1(num * num, n);
}

// Factorial
function factorial3(num) {
  if (num === 1 || num === 0) return 1;
  return num * factorial3(num - 1);
}

// Write a function which takes an array of numbers and returns the product of them all

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// recursiveRange 
// Write a function accepts a number and adds up all numbers from 0 to number
function recursiveRange(num) {
  if (num === 0 || num === 1) return 1;
  return num + recursiveRange(num - 1);
}

// Fibonacci 
// Write recursive function which accepts a number and returns the nth number in the
// fibonacci sequence 1, 1, 2, 3, 4, 5, 8, ... which starts with 1 and 1 and where
// every number thereafter is equal to sum of the previous two numbers.
function fib(num) {
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
}

// Reverse write a recursive function which accepts a string and returns a new string in reverse.

function reverse(str) {
  if (str.length === 0) return '';
  return reverse(str.substring(1)) + str.charAt(0);
}

function reverse1(str) {
  return str.split("").reverse().join("");
}

// Is Palindrome?
// Write a recursive function which returns true if the string passed to it is a
// palindrome (reads the same forward and backward). Otherwise it returns false.
function isPalindrome(str) {
  if (str.length === 0) return '';
  return isPalindrome(str.substring(1)) + str.charAt(0) === str ? true : false;
}


// Jonathan map
function recursiveMap(arr, callback) { 	console.log('Inputted array: ', arr); 	var [first, ...rest] = arr; 	console.log('Deconstructing the array: ', first, rest); 	if (arr.length > 1) { 		return recursiveMap(rest);     } }


// Prime Factorization Tool
function primeFactors(n){
  var factors = [], 
      divisor = 2;

  while(n > 2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n = n / divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}



function primeFactorization(num) {
  var result = new Array();
  var division = 2;

  while (num > 2) {
    if (num % division === 0) {
      result.push(division);
      num = num / division;
    } else {
      division++;
    }
  }
  return result;
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}