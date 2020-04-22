// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
};

const strlist = ["hello", "goodbye", "extra test"];

console.log("Challenge output: " + processFirstItem(strlist, (str) => str + str));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 increments a count variable and keeps that value related to it, within its scope. counter2 increments a counter outside of its scope.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 has closure because everything it needs to access is held within it. counter2 is not, because count is declared and available outside of its function's scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 could be better if you only want a counter to be increased when that particular function is run. counter2 could be better if multiple areas of the code need
 * to increment the same counter, or if that counter value needs to be outside of the function's scope.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    return Math.floor(Math.random() * 3);

}

console.log("inning(1) output: " + inning(1));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cbf, numIn){

  let home = 0;
  let away = 0;

  for (let i = 0; i < numIn; i++){

    home += cbf();
    away += cbf();

  }

  return { "Away": away, "Home": home };

}

console.log("finalScore(inning, 2) output: Away : " + finalScore(inning, 2).Away + " Home: " + finalScore(inning, 2).Home);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function scoreboard(cbf, numIns) {
  
  let results = [];
  let homeTotal = 0;
  let awayTotal = 0;

  for (let i = 0; i < numIns; i++){

    let h = cbf();
    let a = cbf();

    homeTotal += h;
    awayTotal += a;

    results.push("Inning " + i + ": " + a + " - " + h);

  }

  results.push("Final Score: " + awayTotal + " - " + homeTotal)

  return results;

}

console.log("scoreboard(inning, 9) output: " + scoreboard(inning, 9));


