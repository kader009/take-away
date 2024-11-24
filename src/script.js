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

// Write a JavaScript function to check if a given string is a palindrome

function palinDrome(str) {
  return str === str.split('').reverse().join('');
}

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function isEven(array) {
  return array.filter((num) => num % 2 === 0);
}

// Write a JavaScript program to calculate the factorial of a given number.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// Write a JavaScript function to check if a given number is prime.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// promise

const promise = new Promise((resolve, reject) => {
  // console.log(1);
  resolve('success');
});

promise.then(() => {
  // console.log(2);
});

// console.log(3);

// in promises resolve nor reject all

const promise1 = new Promise((resolve, reject) => {
  // console.log(1);
});

promise1
  .then(() => {
    // console.log(3);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(4);

// curring function

function Curr(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

const getallAns = Curr(4)(5)(6)(9);
// console.log(getallAns);

// show arguments
function showArguments() {
  // console.log(arguments);
}

showArguments(1, 2, 3, 4);

const books = {
  'Deep work': 'Cal Newport',
  'Atomic Habits': 'James Clear',
};

const proxy = new Proxy(books, {
  get: (target, key) => {
    console.log(`you get the ${key} from ${target[key]}`);
    return target[key];
  },
});

// console.log(proxy);

if (true) {
  // console.log('it is true');
}

// if statement

let age = 18;

if (age >= 18) {
  // console.log('you can inter now..');
}

// logical OR
let x;
// console.log(x ||= x);

// logical assigment operator

const user = {
  name: 'kader',
};

user.nickname ??= 'molla';
// console.log(user);

// nullish operator
const nick = null ?? 'Rasel';
// console.log(nick);

// javascript has tree scope

// ? global scope
// ? local scope
// ? block scope

// block scope

function say(message) {
  if (!message) {
    let greeting = 'Hellow there..';
    console.log(greeting);
  }
}

// say();

// console.log(counter);
// var counter = 9;

// event loop main 4 point

// ? Call Stack
// ? Web Api
// ? CallBack Queue
// ? Event Loop

let isTrue;

// isTrue ? console.log('true') : console.log('false');

switch (new Date().getDay()) {
  case 6:
    // console.log('today is saterday');
    break;
  case 0:
    // console.log('today is sunday');
    break;
  case 1:
    // console.log('today is monday');
    break;

  default:
    break;
}

// while loop
let coun = 1;

while (coun < 10) {
  // console.log(coun);
  coun += 2;
}

// do while loop
let count = 0;
do {
  // console.log(count);
  count++;
} while (count < 5);

// for loop
for (let i = 0; i <= 5; i++) {
  // console.log(i);
}

// iife
(function(){
  // console.log('i am iife');
})()

// const immutable

const setOne = [];
