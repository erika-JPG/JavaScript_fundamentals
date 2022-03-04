/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  },
};

/* 1. Create one player array for each team (variables 'players1' and 'players2')*/
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

/*
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
*/
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

/*
3. Create an array 'allPlayers' containing all players of both teams (22
players)
*/
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

/*
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
 */
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

/*
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
*/
const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log(team1, draw, team2);
/*
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
*/
game.printGoals(...game.scored);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

/*
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
console.log('');
console.log('');

// CHALLENGE 2
/*1.- Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")*/
console.log(`***Challenge 2 Part 1***`);
const goalsScored = Object.entries(game.scored);

for (const [index, name] of goalsScored.entries()) {
  console.log(`Goal ${index + 1}, scored by ${name[1]}`);
}

/*2.- Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)*/
console.log(`***Challenge 2 Part 2***`);
const values = Object.values(game.odds);

let data = 0;
for (let x of values) {
  data += x;
}
average = data / values.length;
console.log(`Game average is ${average}`);

/* 3.- Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉 */
console.log(`***Challenge 2 Part 3***`);
console.log(game.odds.x);
console.log(game);

const teamOdds = [game.team1, 'odds', game.team2];
console.log(teamOdds);

const x = Object.entries(game.odds);
console.log(x);

for (const [team, odds] of x) {
  //console.log(team, odds);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odds}`);
}

/* 4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
} */
console.log('');
console.log('');
console.log(`***Challenge 2 Part 4***`);

let scorers = {}; /* We start by creating an empty object*/
for (const player of game.scored) {
  /*We loop throught the scored property and we add one for each occurrence of a player(goal scored)*/
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

//Challenge #3
console.log('');
console.log('//////////////////////////');
console.warn('***Challenge 3 Part 1***');
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*1. Create an array 'events' of the different game events that happened (no
duplicates) */
/* The values that we need to have in the array are the 'values' of each key (entry). We use .values() to select all the values in the map, turn that into a new set and use the spread operator to push every entry into an array */
console.log('Logging just the values of the map: ');
const a = gameEvents.values();
console.log(a);

console.log('Turnng those values into a set:');
const b = new Set(gameEvents.values());
console.log(b);

console.log('Storing each value into an array:');
const events = [...new Set(gameEvents.values())];
console.log(events);
console.log('');

console.warn('***Challenge 3 Part 2***');
/*2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.*/

const no64 = gameEvents.has(64) ? gameEvents.delete(64) : false;
console.log(gameEvents);

console.warn('***Challenge 3 Part 3***');
/*3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes) */

/* using the spread operator to store the keys in an array and using the .pop() method to retrieve the last value of the array whis is the real duration of the game */
const time = [...gameEvents.keys()].pop();
console.log(time);
const averageMins = time / gameEvents.size;

console.log(`An event happened, on average, every ${averageMins} minutes`);

console.warn('***Challenge 3 Part 4***');
/*4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:⚽ GOAL */

for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}

console.log('');
console.log('Using the ternary operator to achieve the same result');

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${minute}: ${event}`);
}
