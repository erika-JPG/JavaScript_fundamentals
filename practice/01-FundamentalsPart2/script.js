//activates strict mode. It has to be the very first line of the script, though comments are allowed.
'use strict';

let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; //  here we spelled out wrong a variable

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive'); // Without stric mode, it is not logged to the console and we didn't get an error message

/*
LECTURE: Functions

1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    let str = console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
    return str;
}

describeCountry("Mexico", 5, "CDMX");
describeCountry("Finland", 3, "Helsinki");

/*Solution from the video */
function country(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPortugal = country('Portugal', 10, 'Lisbon');
const descGermany = country('Germany', 83, 'Berlin');
const descFinland = country('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);

/*
LECTURE: Function Declarations vs. Expressions

1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const portugal1 = percentageOfWorld1(10);
const germany1 = percentageOfWorld1(83);
const finland1 = percentageOfWorld1(6);

console.log(portugal1, germany1, finland1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const portugal2 = percentageOfWorld2(10);
const germany2 = percentageOfWorld2(83);
const finland2 = percentageOfWorld2(6);

console.log(portugal2, germany2, finland2);


/*------------------------------------------------------------------------------
ARROW FUNCTIONS                                                               */
// Where birthYear is the parameter and 2037 is the current year
const calcAge3 = birthYear => 2021 - birthYear;
// storing the value of the function in a variable where 1991 is the value passed in to the function
const age3 = calcAge3(1991);
// printing to the console
console.log(age3);


// Creating an arrow function with more than one parameter
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Erika'));

/*------------------------------------------------------------------------------
FUNCTIONS CALLING OTHER FUNCTIONS                                             */

function piecesOfFruit(fruit) {
    return fruit * 3;
};

function fruitProcessor(apples, oranges) {
    const applePieces = piecesOfFruit(apples);
    const orangePieces = piecesOfFruit(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

    return juice;
}

console.log(fruitProcessor(2, 3));

/*
LECTURE: Introduction to Arrays

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const populations = [20, 60, 13, 6];

if (populations.length === 4) {
    console.log('the array has four elements');
} else {
    console.log('the array does NOT have four elements');
}

const percentages = [percentageOfWorld2(populations[0]), percentageOfWorld2(populations[1]), percentageOfWorld2(populations[2]), percentageOfWorld2(populations[3])];

console.log(percentages);

/*
LECTURE: Basic Array Operations (Methods)

1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighbours = ['USA', 'Canada', 'Belize', 'Guatemala'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany') === false) {
    console.log(neighbours);
}

const index = neighbours.indexOf('Canada');
neighbours[index] = 'Ca Na Da';
console.log(neighbours);

/* Another way would be: */

neighbours[neighbours.indexOf('Guatemala')] = 'Guatepeor';
console.log(neighbours);

/*
LECTURE: Introduction to Objects

1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
    country: 'Mexico',
    capital: 'CDMX',
    language: 'Spanish',
    population: 116,
    neighbours: ['USA', 'Guatemala', 'Belize'],

}

console.log(myCountry);

/*
LECTURE: DOT VS BRACKET NOTATION */

//  using the object myCountry to retrieve information

// using dot notation
console.log(myCountry.capital);

// using bracket notation
/* in bracket notation we can use any expression we want as long as it equals to any exixting key pair in the object*/
console.log(myCountry['capital']);

/* When trying to access a property that does not exist in an object we get: UNDEFINED */
console.log(myCountry.weather);

/* We can use bracket notation to use user input to retrieve data from the object */
const intetestedIn = prompt('What do you want to know about this country? Chose between country, capital, language, population, and neighbours');
/* but we can't use dot notation with this because the object does not have an interestedIn property */
console.log(myCountry.interestedIn);
/* use brackets notation instead so that the expression inside the brackets gets evaluated first and then passed in as a propery name*/
console.log(myCountry[intetestedIn]);

// Retireving data stored in an array from an object
// "Mexico has three neighbours and the bigges of all is USA"

console.log(`${myCountry.country} has ${myCountry.neighbours.length} neighbours and the biggest of all is ${myCountry.neighbours[0]}`);

/*
LECTURE: Dot vs. Bracket Notation

1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// try myCountry.population +=2; next time
myCountry.population = myCountry.population + 2;
console.log(myCountry.population);

// try myCountry.population -=2; next time
myCountry['population'] = myCountry.population - 2;
console.log(myCountry.population);

const me = {
    firstName: 'Erika',
    lastName: 'Ponce',
    birthYear: 1991,
    job: 'developer',
    friends: ['Viky', 'Brenda', 'Mayra'],
    hasDriversLicense: true,

    a: function () {
        this.age = 2021 - this.birthYear;

        if (hasDriversLicense) {
            this.yesno = 'a';
            return this.yesno;
        } else {
            this.yesno = 'no';
            return this.yesno;
        }
        return this.age;
    },

    calcAge4: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },
    /*From the Video*/
    summary: function () {
        return `${this.firstName} is a ${this.calcAge4()} years old ${me.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }

}

// LECTURE CHALLENGE: "Erika is a XX years old developer, and she has a driver's licence";
// Mine:
console.log(`${me.firstName} is a ${me.calcAge4()} years old ${me.job}, and she has ${me.a()} license.`)

console.log(me.summary());

/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/

const myCountry2 = {
    country: 'Mexico',
    capital: 'CDMX',
    language: 'Spanish',
    population: 116,
    neighbours: ['USA', 'Guatemala', 'Belize'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    /* From the video 
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    }
    */

    checkIsIsland: function () {
        this.isIsland = this.neighbours.length > 0 ? false : true;
        return this.isIsland;
    }

    // A much simpler version:
    // this.isIsland = !Boolean(this.neighbours.length);
    /*
    Remember that 0 is a falsy value!!!
    If we convert the length to boolean (either zero or other than zero) we get true (for other than zero) and false (for zero)
    Using the operator NOT, we switch the values:
     if length > 0 , then the boolean value is TRUE. But if the leght is higher than zero, we need to switch the value to false (it's not an island, therefore we use !Boolean
    */

}

console.log(myCountry2.describe());
console.log(myCountry2.checkIsIsland());
console.log(typeof Boolean(myCountry2.neighbours.length));
console.log(Boolean(myCountry2.neighbours.length));

/*
LECTURE: Iteration: The for Loop

1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}


// using a for loop to fill in an empty array
// We use this array for our calculations
const years = [1991, 2007, 1969, 2020];
// We create the empty array
const ages = [];
// the FOR loop
// Where i is the common variable name for the counter. Initialized to zero because arrays are zero based.
// and the condition (the loop will continue until condition isn't true) is true as long as the counter is less than the array length
for (let i = 0; i < years.length; i++) {
    // Where 2037 is the current year
    ages.push(2037 - years[i]);
}
// Logging the new filled in array to the console
console.log(ages);

/*
LECTURE: Looping Arrays, Breaking and Continuing

1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld2' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

// const percentageOfWorld2 = function (population) {
//    return (population / 7900) * 100;
//}

const loopingPopulations = [20, 60, 13, 6];
const percentages2 = [];
for (let i = 0; i < loopingPopulations.length; i++) {

    percentages2.push(percentageOfWorld2(loopingPopulations[i]));
}
console.log('----------PERCENTAGES OF WORLD COUNTRIES USING THE FOR LOOP---------')
console.log(percentages2);

/*
LECTURE: Looping Backwards and Loops in Loops

1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

const listOfNeighbours = [
    ['Canada', 'Mexico', 'Guatemala'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];
console.log('----------LOGGING REAL NEIGHBOURS---------')
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let a = 0; a < listOfNeighbours[i].length; a++) {
        if (listOfNeighbours[i][a] !== 'Guatemala') continue;
        console.log(`Neighbour: ${listOfNeighbours[i][a]}`);
    }
}
console.log('----------LOGGING ALL NEIGHBOURS---------')
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let a = 0; a < listOfNeighbours[i].length; a++) {
        console.log(`Neighbour: ${listOfNeighbours[i][a]}`);
    }
}

/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/
/*
const loopingPopulations = [20, 60, 13, 6];
const percentages2 = [];
for (let i = 0; i < loopingPopulations.length; i++) {

    percentages2.push(percentageOfWorld2(loopingPopulations[i]));
}*/

const whilePopulations = [20, 60, 13, 6];
const percentages3 = [];

let i = 0;

while (i < whilePopulations.length) {
    percentages3.push(percentageOfWorld2(whilePopulations[i]));
    i++;
}

console.log('----------PERCENTAGES OF WORLD COUNTRIES USING THE WHILE LOOP---------');
console.log(percentages3);