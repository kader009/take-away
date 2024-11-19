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

function modifyReference(y){
  y.value = 15
}

modifyReference(obj)
console.log(obj.value);


