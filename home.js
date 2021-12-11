console.log('Hello');
//alert('yooo');

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

document.getElementById('someText').innerHTML = 'Hey There';

//var age = prompt('What is your age?');
//console.log(age);

//functions

/*function greeting(yourName) {
    var result = 'Hello' + " " + yourName;
    console.log(result);
}
var name = prompt('What is your name?');
greeting(name);*/

//while loops

/*var num = 0;
while (num < 100) {
    num += 1
    console.log(num)
}
*/

//for loops

/*for (let num = 0; num < 100; num++) {
    console.log(num);
}*/

//Data types
let yourAge = 18; //number
let nume = 'Bob'; //string
let name = { first: 'Vlad', last: 'Bocai' }; //object
let truth = false; //boolean
let groceries = ['banane', 'mere', 'pere']; //array
let random; //undefined
let nothing = null; //value null

//Strings in JavaScript (common methods)

let fruit = 'banana';
let moreFruits = 'banana\napple';
console.log(moreFruits); //new line
console.log(fruit.length);
console.log(fruit.indexOf('p'));
console.log(fruit.slice(1, 5));

//array

let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]);

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.lenght; i++) {
  console.log(fruits[i]);
}

console.log(fruits.toString());

//objects

let student = {
  first: 'Vlad',
  last: 'Bocai',

  height: 174,
  studentInfo: function () {
    return this.last + '\n' + this.first;
  },
};
console.log(student.studentInfo);

// if else
var age = 56;
if (age >= 18 && age <= 35) {
  status = 'target demo';
} else {
  status = 'not my audience';
}
console.log(status);

//switch statements
switch (1) {
  case 0:
    text = 'weekend';
    break;
  case 5:
    text = 'weekend';
    break;
  case 6:
    text = 'weekend';
    break;
  default:
    text = 'weekday';
}
console.log(text);

// ZTM
/*Advanced Functions */
//Closures
//Currying
//Compose

/*Advanced Arrays */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const double = [];
const newArray = array.forEach((element) => {
  double.push(element * 5);
});

console.log(double);

// map, filter, reduce
//map
const mapArray = array.map((num) => {
  return num * 2;
});

console.log(mapArray);

//filter

filterArray = array.filter((num) => num >= 5);

console.log(filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log(reduceArray);

// advanced objects: reference type, context vs scope , instantiation

//instantiation

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Vladutzuu', 'Dark Magic');
