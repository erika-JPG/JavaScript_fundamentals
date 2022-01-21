/*** CODING CHALLENGE ***/
console.log('CODING CHALLENGE');

/* Mark and John are trying to compare their ImageBitmap, which is calculated using the formula:
BMI = mass / height ** 2 
*/

// Store Mark's and John's mass and height in variables
const markMass1 = 6;
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

// Coding Challenge #2
// Use the code from challenge #1 and improve it
/* Print a nice output to the console saying who has the higher BMI: "Mark's BMI is higher than Johns!" and use a template literal to include the BMI */

if (markBmi1 > johnBmi1) {
    console.log("Mark's BMI (" + markBmi1 + ") is higher than Johns (" + johnBmi1 + ")!")
} else {
    console.log(`John's BMI (${johnBmi1}) is higher than Mark's (${markBmi1})`)
};

// Coding Challenge #3
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
4. Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphins1 = (96 + 108 + 89) / 3;
const koalas1 = (88 + 91 + 110) / 3;

const dolphins2 = (97 + 112 + 101) / 3;
const koalas2 = (109 + 95 + 123);

const dolphins3 = (97 + 112 + 101) / 3;
const koalas3 = (109 + 95 + 106) / 3;

if (dolphins2 == koalas2) {
    console.log("It's a draw!");
} else if (dolphins2 > koalas2) {
    console.log("Dolphins win!");
    if ((dolphins2 - koalas2) >= 100) {
        console.log(`They won with a difference of at least 100 points over the Koalas!`);
    }
} else if (dolphins2 < koalas2) {
    console.log("Koalas win!")
    if ((koalas2 - dolphins2) >= 100) {
        console.log(`They won with a difference of at least 100 points over the Dolphins!`);
    }
};

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test DATA
Data 1: Test for bill values 275, 40 and 430
*/

let bill = 430;
const tip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${bill + tip}`);


/*
JavaScript Fundamentals – Part 2

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉
*/


/*Creating an arrow function */
const calcAverage = (a, b, c) => (a + b + c) / 3;

/*Using a function declaration */
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
    } else {
        return `nobody wins`;
    }
}

/* Using a function expression */
const checkWinner2 = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
    } else {
        return `nobody wins`;
    }
}

/* TEST 1 */
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

console.log(checkWinner(avgDolphins1, avgKoalas1));
console.log(checkWinner2(avgDolphins1, avgKoalas1));

/*TEST 2 */
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolphins2, avgKoalas2));
console.log(checkWinner2(avgDolphins2, avgKoalas2))

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) 😉
*/

const calcTip = function (bill) {
    let tip = 0;
    if (bill > 50 && bill <= 300) {
        tip = bill * .15;
        return `the bill was ${bill}  and the tip was ${tip} amounting to total of $${bill + tip}`;
    } else {
        tip = bill * .20;
        return `the bill was ${bill}  and the tip was ${tip} amounting to total of $${bill + tip}`;
    }
}
console.log(tip);

console.log(calcTip(100));

const bills = [calcTip(125), calcTip(555), calcTip(44)];
console.log(bills);

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

const markMiller = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const johnSmith = {
    firstName: 'John',
    lastName: 'Miller',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

console.log(`John's BMI (${johnSmith.calcBMI()}) is ${johnSmith.calcBMI() > markMiller.calcBMI() ? 'higher' : 'lower'} than ${markMiller.firstName}'s (${markMiller.calcBMI()})`);

/*
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 😉
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

const calcTip = function (bill) {
    let tip = 0;
    if (bill > 50 && bill <= 300) {
        tip = bill * .15;
        return `the bill was ${bill}  and the tip was ${tip} amounting to total of $${bill + tip}`;
    } else {
        tip = bill * .20;
        return `the bill was ${bill}  and the tip was ${tip} amounting to total of $${bill + tip}`;
    }
}
*/


const loopBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//From the video: 
/* const loopTips = function() {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
*/

const loopTips = function (bill) {
    let tip = 0;
    if (bill > 50 && bill <= 300) {
        tip = bill * .15;
        return tip;
    } else {
        tip = bill * .20;
        return tip;
    }
}

//From the video:
/*
for (let i = 0; i < loopBills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills);
}
*/

for (i = 0; i < loopBills.length; i++) {
    // TIPS ARRAY
    tips.push(loopTips(loopBills[i]));
    // TOTALS ARRAY
    totals.push(tips[i] + loopBills[i]);   // Here we are repeating a calculation, instead of using the value stored in a variable
}

console.log('----------------- TIPS ARRAY ---------------');
console.log(tips);
console.log('----------------- TOTALS ARRAY ---------------');
console.log(totals);

const calcAverage2 = function (arr) {
    // Use let sum = 0; next time
    sum = 0;
    for (i = 0; i < arr.length; i++) {
        // A simpler version: sum += arr[i];
        sum = sum + arr[i];
    }
    average = sum / arr.length;
    // from video: return sum / arr.length;
    return average;
}
console.log('----------------- BILLS AVERAGE ---------------');
console.log(calcAverage2(totals));