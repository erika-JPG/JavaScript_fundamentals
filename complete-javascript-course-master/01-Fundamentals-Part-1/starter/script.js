let country = 'Mexico';
let continent = 'America';
let population = 1222333;

console.log(country, continent, population);

let isIsland = false;
let language;
console.log(isIsland, population, country, language);

language = "Spanish";

console.log(population / 2);
population++;
console.log(population);

let finland = 6000000;
console.log(population > finland);

let averagePopulation = 33000000;
console.log(population < averagePopulation);

let description = country + " is in " + continent + " and its " + population + " people speak " + language;

console.log(description);

/*** CODING CHALLENGE ***/
console.log('CODING CHALLENGE');

/* Mark and John are trying to compare their ImageBitmap, which is calculated using the formula:
BMI = mass / height ** 2 
*/

// Store Mark's and John's mass and height in variables
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markM2 = 95;
const markH2 = 1.88;
const johnM2 = 85;
const johnH2 = 1.76;

const markBmi1 = markMass1 / (markHeight1 ** 2);
console.log("Test 1: Mark BMI = " + markBmi1);
const johnBmi1 = johnMass1 / (johnHeight1 ** 2);
console.log("Test 1: John BMI = " + johnBmi1);
const markHigherBMI1 = markBmi1 > johnBmi1;
console.log("Is Mark's BMI higher than Johns? " + markHigherBMI1);

const markBMI2 = markM2 / (markH2 ** 2);
console.log("Test 2: Mark BMI = " + markBMI2);
const johnBMI2 = johnM2 / (johnH2 ** 2);
console.log("Test 2: Mark BMI = " + johnBMI2);
const markHigherBMI2 = markBMI2 > johnM2;
console.log("Is Mark's BMI higher than Johns? " + markHigherBMI2);
