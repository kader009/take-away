var numbers = 10;
var numbers = 12;

// console.log(numbers);

let a = 6;

function modifyValue(b) {
  b = 5;
}

modifyValue(a);
// console.log(a);

// pass by reference

let obj = { value: 5 };

function modifyReference(y) {
  y.value = 15;
}

modifyReference(obj);
// console.log(obj.value);

// difference between map and filter

const number = [1, 2, 3, 4, 5];

// map tranform each element and return a new array
let mapped = number.map((num) => num * 2);

// filter based on condition and return an new array
let filtered = number.filter((num) => num > 3);
// console.log(filtered);

// foreach methods
const foreachs = number.forEach((num) => num * 4);
// console.log(foreachs);

// javascript data type
// todo: number, string, boolean, bignit, symbol, null, undefined

// Write a JavaScript function to calculate the sum of two numbers.

function twoSum(x, y) {
  return x + y;
}

// Write a JavaScript program to find the maximum number in an array.

function FindMax(arr) {
  return Math.max(...arr);
}

console.log(FindMax([30, 45, 47, 39, 100]));
