//decalre variables
function addTwo(x) {
  return x + 2;
}

function add(x, y, z = 0) {
    /*
  console.log(typeof z);

  if (z === undefined) {
    z = 0;
  }*/

  return x + y + (typeof(z) === 'undefined' ? 0 : z);
}

let greeting = "Hello";
//let is very similar to how java works (obeys scope and cannot redeclare)
function test() {
  if (true) {
    let greeting = "Hi";
  }

  console.log(greeting);

  //constants cannot have a value changed
}
const TEST_VALUE = 6;

// == -> Checks the value === -> Checks the datatype
//=== is always a better option cause it compares more than just value

console.log(1 == "1");
console.log(1 === "1");
console.log(1 == true);
console.log(1 === true);
console.log(typeof 1);
console.log(typeof true);

//There is also !== & !=== which is not == & not===

let number1 = 6;
let number2 = 7;
let sum = number1 + number2;

const result = number1 + " + " + number2 + " = " + sum;
/*
console.log(result);
*/
//anything in ${}, you get the value of that variable

const result2 = `${number1} + ${number2} = ${sum}`; //anything in backticks becomes part of the string
console.log(result2);
console.log(addTwo(5));

console.log(add(1, 2, 3));
console.log(add(1, 2)); //at most it takes three arguments but it can take less

let num  = 7;

//NEW THING -> Ternary Operator
//condition ? true:false
console.log(num%2 ==0?'even':'odd'); //'' what it returns when its true and : for when it it false

//FOR LOP

for (let index = 0; index < 7; index++) {
 console.log(index)  

}
//ARRAYS
const colours = ['Red', 'yellow', 'green', 'blue']; //square brackets
//each element is called colour
    for (const colour of colours) { //for of allows you to iterate through the values of an object
        console.log(colour);
    }
//OBJECTS
const car = {make:'Ford',model:'Mustang'}; 
    for (const prop in car) { //in rather than of
        console.log(`${prop}:${car[prop]}`); //backticks
 
    }
    console.log(car.make);
    console.log(car[`make`]);
