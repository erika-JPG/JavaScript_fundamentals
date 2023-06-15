'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements) { 
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) { 
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })

}
displayMovements(account1.movements);


const calcDisplayBalance = function (movements) { 
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
}
calcDisplayBalance(account1.movements)

const calcDisplaySummary = function (acc) { 
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(int => int >= 1)
    .reduce((count, interest) => count + interest, 0)
  labelSumInterest.textContent = `${interest}€`;
}


//Using a Map to loop through an array of objects. 
const createUsernames = function (accounts) { 
  accounts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]).join('');
  });
} 
createUsernames(accounts);

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Preventing submitting the form
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value)) { 
    // Display welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear inpur fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    // Display Movements
    displayMovements(currentAccount.movements);

    // Display Balance
    calcDisplayBalance(currentAccount.movements);

    //Display Summary
    calcDisplaySummary(currentAccount);
  }

})








/////////////////////////////////////////////////
/////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////// 

//Using filter
const deposits = movements.filter(function (mov) { 
  return mov > 0

})
console.log(deposits)

//Using a for of
const depositsFor =[]
for (const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(deposits)

//Mini challenge: creating an arraw of withrawals
const withrawals = movements.filter( mov => mov < 0 );
console.log(withrawals);


//Using the reduce method
// const balance = movements.reduce((function (acc, curr, i, arr) { 
//   console.log(`iteration number ${i}: Accumulator(${acc}) + Movement(${curr})`)
//   return acc + curr;

// }), 0);
const balance = movements.reduce((acc,curr,i) => acc +curr, 0) 
console.log('.reduce(()=> (condition), 0) Balance ' + balance);


    //Using for of
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log('For of Balance: ' + balance2)

// Getting the maximum value
const max = movements.reduce((acc, mov) => mov > acc ? mov : acc, 0);
console.log(`Max deposit in movements array: ${max}`);




/*******************
 * 
 * CODING CHALLENGE #1
 * 
 ******************/
/*Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog 🐶 number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀
*/

const julia1 = [3, 5, 2, 12, 7];
const julia2 = [9, 16, 6, 8, 3];
const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) { 
  const corrected = dogsJulia.slice(1, -2);
  //creating a shallow copy:
  /*const corrected2 = dogsJulias.slice();
  corrected2.splice(0, 1);
  corrected2.splice(-2);*/
  const dogs = [...corrected, ...dogsKate];
  console.log(dogs);
  dogs.forEach((e,i) => { 
    let type = e > 3 ? 'an adult' : 'still a puppy 🐶!';
    
    console.log(`Dog number ${i + 1} is ${type} and is ${e} years old`);
  })

}

checkDogs(julia1, kate1);
checkDogs(julia2, kate2);


/*******************
 * 
 * CODING CHALLENGE #2
 * 
 ******************/
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
const data1 = [5, 2, 4, 1, 15, 8, 3],
  data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) { 
  const humanYears = ages.map(e => { 
    return e <= 2 ? e * 2 : 16 + e * 4;
  })
  // console.log(humanYears)

  const filtered = humanYears.filter(e => { 
    return e >= 18;
  }) 
  // console.log(filtered)

  const averageAges = filtered.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(averageAges.toFixed(2));
}


calcAverageHumanAge(data1);
calcAverageHumanAge(data2)


/*******************
 * 
 * CODING CHALLENGE #3
 * 
 ******************/
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
*/


const calcAverageHumanAge2 = (ages) => { 
  const humanYears = ages.map(e => { 
    return e <= 2 ? e * 2 : 16 + e * 4;
  }).filter(e => {
    return e >= 18;
  }).reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  
  console.log(humanYears.toFixed(2));
} 

const calcAverageHumanAgeJonas = ages =>
  ages
    .map(e => (e <= 2 ? e * 2 : 16 + e * 4))
    .filter(e => e >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  

calcAverageHumanAge2(data1);
calcAverageHumanAge2(data2);


// The FIND method
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
//Using a for of loop:
let acct = {};
for (const acc of accounts) { 
  if (acc.owner === 'Jessica Davis') {
    acct = acc;
  } 
} 
console.log(acct);
