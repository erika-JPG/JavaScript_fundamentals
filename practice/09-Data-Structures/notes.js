'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Creating a new method that takes in an object as a parameter. Some values have been assigned a default value in case they are not defined in the object. The order of the parameters does not need to match the order in which they appear in the object. The function does the deconstructing automatically for us.
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '00:00',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // Creating a new function using REST
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log('FUNCTION THAT TAKES IN AN OBJECT AS A PARAMETER');
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterMenu: 2,
});
//In this function call, there are some parameters that are not defined, and the default value declared in the function are used instead.
restaurant.orderDelivery({
  address: 'Grapre Street, #7',
  starterIndex: 1,
});

console.log('DECONSTRUCTING AN OBJECT');
// We create a new object using {} with variables (property names) that exist in the restaurant object to retrieve specific data from it.
// restaurant object contains a name, openingHours, and categories and so, we can create this new variables that hold the right information
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

console.log('RENAMING VARIABLES');
// We can rename the variables like so:
// Remember to always use the exact property name from the object they are being copied from
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(openingHours, hours, tags);

console.log('DEFAULT VALUES');
// When we are trying to read a property that does not exist, we get undefined.
// We can give variables default values in case they dont exist:
// It is particulary useful when we are working with data retrieved form an API or data that is not hard coded into our file.
// A value of "empty array" is set as default in case, the property does not exist.
const { menu = [], starterMenu: apetizers = [] } = restaurant;
console.log(menu, apetizers);

console.log('MUTATING VARIABLES');
/* Mutating variables already created in our code using data from an object.
We have declared variables "a" and "b" Note: they are declared with let because they will be changed.*/
let a = 111;
let b = 999;

/* We then have an object with properties named the same as our variables. */
const obj = { a: 23, b: 7, c: 14 };

/* However, we cannot directly assign an object to our variables like so:

{a, b} = obj;

This throws an error because when we start a line with {}, JS expects a code block, and since we cannot assign anything to a code blcok, the error occurs as "unexpected token ="

A way around it, is to wrap the entire expresion in () */

({ a, b } = obj);
console.log(a);
console.log(b);

console.log('NESTED OBJECTS');
/* We can also deconstruct nested objects
Here we first create a new variable with the same name as the property object that we want to retrieve data from */
const { fri } = openingHours;
console.log(fri);

/*However, this gives us an object, but we can also deconstruct it into variables like so: */
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Copying an array using the spread operator:
const mainMenuCopy = [...restaurant.mainMenu];

// Joining two or more arrays with the spread operator:
const menuMerged = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuMerged);

// Spread operator also works for strings
const yo = 'Erika';
console.log(...yo);

// To create a new object from an existing one (making a shallow copy) but adding more properties:
console.log('EXTENDED OBJECT');
const newRestaurant = { foundedIn: 1985, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

//SPREAD VS REST
/* While syntax is the same, SPREAD occurs when on RIGHT side of the '=' operator. REST when on LEFT */
console.log('SPREAD');
const myArray = [1, 2, ...[3, 4]];
console.log(myArray);

console.log('REST');
const [d, e, ...others] = myArray;
console.log(d, e, others);

// Function with REST
console.log('-----Function with Rest------');
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
/* specifying only a few parameters, we still get an empty array for the parameters missing */
restaurant.orderPizza('cheese');

//Short circuiting && and ||
console.log('----- OR------');
console.log('' || 'truthy');
console.log(0 || 'truthy' || 'truthy too');
console.log(undefined || null);
console.log(true || 0);

// Sets a default value is the firts property doesn't exist but if this value has been assigned already, this will return the assigned value (given that is a truthy value) Look at Nullish operator to fix this.
// Using ternary operator
console.log('Ternary operator');
const guests1 = restaurant.numGuests ? restaurant.numGuests : 1;
console.log(guests1);
// Using OR short-circuiting
console.log('OR short circuiting');
const guests2 = restaurant.numGuests || 1;
console.log(guests2);

console.log('----- AND------');
console.log(
  0 && 'string'
); /*--> evaluation stops as soon as one value is false. All values must be true for the expression to be true */
console.log(
  8 && 'string' && true
); /*--> if all the values are true, only the last one will be returned since it was the last one to be evaluated */

// Practical Example
// Regular if block
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onions');
}
// AND short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onions');

// Nulish Operator
// toggle restaurant.numGuests to see behavior on guests
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(
  guests
); /*This outputs 10, since restaurant.numGuests is zero, a falsy value */

const correctGuests = restaurant.numGuests ?? 10;
console.log(
  correctGuests
); /* it returns 0, if variable is defined with other than a NULLISH value and returns 10 if the variable IS NULLISH ( null / undefined)*/

//For of Loop
console.log('----- FOR OF LOOP------');

const forMenu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
]; /* Using a Deconstructor we create a single array*/
console.log(forMenu);

/*The for of loop doesn't need a counter, it automatically loops through an array and gives us the current item in the iteration
The item variable is the current element in each iteration
*/
for (const item of forMenu) console.log(item);
/*Getting the item number 
Each entry is an array composed of the index and the value*/
for (const item of forMenu.entries()) {
  //console.log(item);
  /*With some format: */
  console.log(`${item[0] + 1}: ${item[1]}`);
}
/* We can use Destructor since the item is an array*/
for (const [index, element] of forMenu.entries()) {
  console.log(`${index}: ${element}`);
}

// OPTIONAL CHAINING
console.log('---------OPTIONAL CHAINING-------');
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(
    restaurant.openingHours.mon.open
  ); /*Trying to access the opening hours for monday, which in this case, it doesn't exist */

//Using optional chaining
console.log(
  restaurant.openingHours.mon?.open
); /*Without optional chaining, we get an error, instead if a property doesn't exist, we get undefined 
.open is only executed if everything else before '?' exists.*/

console.log(
  restaurant.openingHours?.mon?.open
); /*This adds an extra check at .opening hours, if it doesn't exist, it won't bother checking if .mon exists and it is immediately marked as undefined*/

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, is open at ${open}`);
} /* Here we use a FOR OF loop to loop through the array, 
We use [day] since day isn't an actual property of the object it is just a variable. */

console.log('');
console.log('--------Using ?? NULLISH OPERATOR---------');
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, is open at ${open}`);
} /* In this case, Nullish operator allows us to assign values that are undefined Notice that with || we get that on Saturday the restaurant is closed but in fact is open 24 hours with a value of 0. Using || causes to display undefined because 0 is a falsy value */

// Nullish Coalescent Operator on Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPasta?.(0, 1) ?? 'Method does not exist');

// Nullish Operator on Arrays
const users = [{ name: 'myName', email: 'myemain@mail.com' }];
console.log(users[0]?.name ?? 'User array empty');

// Looping over keys (property names)
/* We are actually not looping over the object iself, we are doing it in an indirect way since objects are not iterables. However there is a way around this using the for of loop */
console.log('');
console.log('************Looping Through Keys');
const properties = Object.keys(openingHours);
console.log(
  properties
); /*Notice that this is an array that we can use to loop through */

let openStr = `We are open on ${properties.length} days: `;
for (const days of properties) {
  openStr += `${days}, `;
}
console.log(openStr);

// Looping over VALUES
console.log('');
console.log('************Looping Through Values');
const values = Object.values(openingHours);
console.log(values);

// Looping over ENTRIES (keys and values)
console.log('');
console.log('************Looping Through Entries');
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

/////////////////////////////////////
// SETS //
console.log('');
console.log('--------- SETS ----------');
const orderSet = new Set([
  'pizza',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(
  orderSet
); /* We can see that only elements that are uniquie are printed to the screen, ignoring the duplicates */

console.log(
  new Set('Erika')
); /* Strings are also iterable, and we can pass them in a new Set() */

console.log(
  orderSet.size
); /* The .size method, allows us to check the size of the set, as opposed to .length in arrays */

console.log(
  orderSet.has('Pizza')
); /* Set that does not contain that specific element */
console.log(
  orderSet.has('pizza')
); /* With the method .has() we can check if an element exist in the Set */

orderSet.add('garlic bread'); /*Adds an element to the set */
orderSet.delete('risotto'); /* Removes an element to the set */
console.log(orderSet);

// USE of SETS: delete repeated data in arrays
const staff = ['Waiter', 'Waiter', 'Chef', 'Chef', 'Manager'];
const staffSet = new Set(
  staff
); /* Creates a set with unique data from an array */
console.log(staffSet);

const staffArray = [...new Set(staff)]; /* Creates an array from a set */
console.log(staffArray);

// MAPS
console.log('');
console.log('----------- MAPS -----------');

const rest = new Map(); /* Creating an empty map */
rest.set('name', 'Classico Italiano'); /* Mapping name to restaurant name */
rest.set(1, 'Firenze, Italy'); /* Setting a new key and mapping it */
console.log(
  rest.set(2, 'Lisbon, Portugal')
); /* Showing that .set(); returns the updated object */

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :('); /* Chaining .set() */

console.log(rest.get('name'));
console.log(
  rest.get(true)
); /* Retrieving data from a MAP using the key name. The key type matters*/

// Example
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Using objects as mapping keys
rest.set([1, 2], 'Test'); /* Using an array as a key mapped to a string */

console.log(
  rest.get([1, 2])
); /* We get undefined because the object passed in the .get() method is different in memory (HEAP) than the key object */

const arr = [
  1, 2,
]; /* Create a variable that holds the array so that both the key and the object passed in in .get() are the same */
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(
  document.querySelector('h1'),
  'Header'
); /* Mapping a DOM object to a key */
console.log(rest);

// ITERATION OF MAPS
console.log('');
console.log('-------Iteration of Maps -----------');

// quizz app
const question = new Map([
  ['question', 'Best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct Answer!'],
  [false, 'try again'],
]); /* Creating a new map from scratch */

console.log(question);

// Converting an object to a MAP
console.log(
  Object.entries(openingHours)
); /*Using the openingHours key from the restaurant object at the beginning of lesson. It returns an array of arrays with a key and a value*/
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Looping through a MAP
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

/* const answer = Number(
  prompt('Your answer')
); /* Getting the answer from user input */

const answer = 3; /* Hard coding the answer to avoid the prompt on reload */
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Converting a MAP back to an arraay
console.log([...question]);

// function that convers any string to first letter uppercase and rest lowercase
const capitalized = function (string) {
  const lowerCase = string.toLowerCase();
  const caps = lowerCase[0].toUpperCase() + lowerCase.slice(1);
  console.log(caps);
};

capitalized('MyUNIvErSe');

// Functions that return other functions, they all are the same but using dfifferent syntax.

const greet0 = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet = greeting =>
  function (name) {
    console.log(`${greeting} ${name}`);
  };

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
