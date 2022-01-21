'use strict';
//VARIABLE HOISTING BEHAVIOR
var me = 'Erika';
let job = 'developer';
const year = 1991;

// Variables declared with var are Hoisted but their value is set to undefined
console.log(me);

//At this point this variable is in the Temporal Dead Zone
console.log(job);

//job and year have the same hoisting behavior, to see it, comment out job
console.log(year);

// FUNCTION HOISTING BEHAVIOR
/*
console.log(functionDeclaration(2, 3));
console.log(functionExpression(2, 3));
console.log(arrowFunction(2, 3));

function functionDeclaration(a, b) {
  return a + b;
}
*/

// This two functions are stored in a const variable that also have the same hoisting behavior which places them in the TDZ
/* 
const functionExpression = function (a, b) {
  return a + b;
};

const arrowFunction = (a, b) => a + b;
*/

// These two functions are now being hoisted with the value of undefined, therefore we get a different error message.
// When logging them, it is equivalent to calling undefined(2+3)
// If we log just the function we get the value of undefined
// console.log(functionExpression);

/*
var functionExpression = function (a, b) {
  return a + b;
};

var arrowFunction = (a, b) => a + b;
*/

// EXAMPLE

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products Deleted!');
}

// In this case "this" points to the global window object.
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
// In a simple function call, "this" value is always undefined
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
// For arrow Functions, they don't get a "this" keyword. Instead, "this" points to the parent function. For this case, the parent of this function is the window object.
calcAgeArrow(1980);

// Attaching a function to an object creates a method.
const erika = {
  year: 1991,
  calcAge: function () {
    // The "this" keyword points to the object that is calling the method.
    console.log(this);
    //Here we use the year that exisit inside the object instead of passing it in line 88
    console.log(2037 - this.year);
  },
};
// Erika is the object calling the method.
erika.calcAge();

// With a new function:
const viky = {
  year: 1990,
};

//This is called method borrowing where we copy the method to a new one
viky.calcAge = erika.calcAge;
//Notw that the object calling the method now is viky, therefore "this" points to viky instead of erika.
viky.calcAge();

// FUNCTIONS AND ARROW FUNCTIONS

//Variables created with var, create window properties and then "this" points to this firstName
//var firstName = 'Matilda';

const jasmin = {
  firstName: 'Jasmin',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  // The scope for "this" in this case, is the global scope since an object does not create a code block, it is an object literal.
  greet: () => console.log(`Hey ${this.firstName}`),
};
jasmin.greet();

//Using a function inside a method
const jasmin2 = {
  firstName: 'Jasmin',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Preserving the value in a variable so that we refer to the correct object.

    /*
    const self = this;
     const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
    */

    // A more modern solution using arrow functions:

    /* 
    const isMillenial =>  () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
    */

    // This solution is better since arrow functions do not have their own "this" keyword and by definition, if using "this" inside an arrow function it will point to the parent function or "surrounding function" (will use the "this" keyword from the parent scope)

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  // The scope for "this" in this case, is the global scope since an object does not create a code block, it is an object literal.
  greet: () => console.log(`Hey ${this.firstName}`),
};

// Because we are using a regular function call, the value assigned to "this" is undefined, and we get an error if the correct value isn't preserved in a variable.
jasmin2.calcAge();
