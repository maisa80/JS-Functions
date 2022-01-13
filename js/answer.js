

/** ======================================================================
 * javaScript - functions
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1 
 *
 * Create a function `sumRangeNumbers()` that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.

 */
console.log('*** Exercise 1.1 ***');
function sumRangeNumbers(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}
let result1 = sumRangeNumbers(22, 91);
console.log(`The sum of the range between 22 and 91 = ${result1}`);


/**
 * Exercise 1.2 
 *
 * Create a function called `fruitColor()` that takes one argument called
 * `fruit` and returns the color of the fruit.
 *
 * The function should be aware of the following fruits (`banana, apple, kiwi,
 * plum`) with respective color (`yellow, green, green, red`).
 *
 
 */
console.log('*** Exercise 1.2 ***');
let text = '';

function fruitColor(fruit) {

    switch (fruit) {
        case "banana":
            text = `yellow`;
            break;
        case "apple":
            text = `green`;
            break;
        case "kiwi":
            text = `green`;
            break;
        case "plum":
            text = `red`;
            break;
    }
    return text;

}
let fruitResult = fruitColor("plum");
console.log(`The color of plum is ${fruitResult}`);



/**
 * Exercise 1.3 
 *
 * Create a function `printRange()` that takes two arguments `rangeStart` and
 * `rangeStop` and returns a string with all numbers comma-separated in the
 * range.
 *
 * Try it using the arguments `25 and 46`.
 *
 
 */

console.log('*** Exercise 1.3 ***');
let numbers = '';

function printRange(rangeStart, rangeStop) {
    for (let i = rangeStart; i <= rangeStop; i++) {
        numbers += i + ',';

    }

    return numbers.slice(0, -1);

}

let result = printRange(25, 46);

console.log(result);

/**
 * Exercise 1.4 
 *
 * Create a function `printRangeReversed()` that takes two arguments
 * `rangeStart` and `rangeStop` and returns a string with all numbers
 * comma-separated in the range.
 *
 * Try it using the arguments `46 and 25`.
 *
 
 */
console.log('*** Exercise 1.4 ***');
let num = '';
function printRangeReversed(rangeStart, rangeStop) {
    for (var i = rangeStart; i >= rangeStop; i--) {

        num += i + ',';
    }
    return num.slice(0, -1);
}

let reversedResult = printRangeReversed(46, 25);
console.log(reversedResult);

/**
 * Exercise 1.5 
 *
 * Create a function `printAnyRange()` that takes two arguments `rangeStart`
 * and `rangeStop` and returns a string with all numbers comma-separated in
 * the range.
 *
 * If `rangeStart` is smaller than `rangeStop` then call the function
 * `printRange()`.
 *
 * If `rangeStart` is greater than `rangeStop` the call the function
 * `printRangeReversed()`.
 *
 * Try it using the arguments `25 and 46` (both ways).
 *
 * Answer with the result using arguments 25 and 46.
 *

 */
console.log('*** Exercise 1.5 ***');

function printAnyRange(rangeStart, rangeStop) {
    if (rangeStart < rangeStop) {
        return printRange(rangeStart, rangeStop);
    }
    if (rangeStart > rangeStop) {
        return printRangeReversed(rangeStart, rangeStop);
    }

}

let res = printAnyRange(25, 46);
console.log(res);



/**
 * Exercise 1.6 
 *
 * Create a function called `stringRepeat()` that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: `grey` and `12`. The number represents the number of times the
 * string should be added to a string.
 
 */
console.log('*** Exercise 1.6 ***');
function stringRepeat(text, count) {
    var repeat = "";
    for (var i = 0; i < count; i++) {
        repeat += text;
    }
    return repeat;
}

var myString = stringRepeat("grey", 12);
console.log(myString);



/**
 * Exercise 1.7 
 *
 * Create a function `inRange()` that takes three arguments, `rangeStart`,
 * `rangeStop` and `value`.
 *
 * The function should return boolean `true` if value is greater than
 * rangeStart and less than rangeStop. Otherwise it should return boolean
 * `false`.
 *
 *
 */
console.log('*** Exercise 1.7 ***');
function inRange(rangeStart, rangeStop, value) {
    if (value > rangeStart && value < rangeStop) {
        return true;
    }
    else {
        return false;
    }

}
let isInRange = inRange(131, 547, 434);

console.log(isInRange);

/**
 * Exercise 1.8 
 *
 * Try out the function `inRange()` using the range `131 - 547` and the value
 * `636`.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
console.log('*** Exercise 1.8 ***');
let isInRange2 = inRange(131, 547, 636);
console.log(isInRange2);


/**
 * Exercise 1.9 
 *
 * Create a function called `degreesToRadians()` that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 
 */
console.log('*** Exercise 1.9 ***');
function degreesToRadians(degree) {
    let radiansValue = (degree * Math.PI) / 180.0;
    //console.log(radiansValue);
    let rounded = Math.round(radiansValue * 10000) / 10000;
    // console.log(rounded);
    return rounded;
}

let value = degreesToRadians(32);
console.log(value);


/**
 * Exercise 1.10 
 *
 * Create a function called `fizzBuzz()` that takes two arguments `start` and
 * `stop` and returns a comma-separated string.
 *
 * The arguments represents the starting point and stop point of the game
 * `Fizz Buzz` (http://en.wikipedia.org/wiki/Fizz_buzz). The function should
 * run from start to stop and add `Fizz`, `Buzz` or both to your
 * result-variable at appropriate numbers.
 * Players generally sit in a circle. The player designated to go first says the number "1", 
 * and the players then count upwards in turn. However, any number divisible by three is replaced by
 * the word fizz and any number divisible by five by the word buzz. Numbers divisible by 15 become fizz buzz.
 * A player who hesitates or makes a mistake is eliminated from the game.
 *
 * Each entry to your result should be comma-separated. If `stop` is equal or
 * lower than `start`, the function should return an appropriate error
 * message.
 *
 * Test the function using `start=1 and stop=30`.
 
 */
console.log('*** Exercise 1.10 ***');
let textresult = '';
function fizzBuzz(start, stop) {
    for (let i = start; i <= stop; i++) {
        if (i % 15 == 0)
            textresult += "Fizz Buzz" + ',';
        else if (i % 3 == 0)
            textresult += "Fizz" + ',';
        else if (i % 5 == 0)
            textresult += "Buzz" + ',';
        else
            textresult += i + ',';

    }

    return textresult;

}
let res11 = fizzBuzz(1, 30);

console.log(res11);

/** ----------------------------------------------------------------------
 * Section 2 . Extra assignments
 *
 * These questions are worth 3 points each. In
 * this section, you could re-use your code from lab 1 in exercise 2.1 and
 * 2.2.
 *
 */



/**
 * Exercise 2.1 
 *
 * Create a function called `printSum()` that should take two variables, the
 * sum of the players hand and the sum of the dealers hand.
 *
 * Your hand should be three cards with the values: `4, 10 and 3`.
 * The dealers hand should be three card with the values: `3, 6, 11`.
 * The function should return the sum and the player: `Player: 17, Dealer:
 * 20`.

 */
console.log('*** Exercise 2.1 ***');
let playerSum = 0;
let dealerSum = 0;
function printSum(player, dealer) {
    for (let i = 0; i < player.length; i++) {
        playerSum += player[i];
    }
    for (let i = 0; i < dealer.length; i++) {
        dealerSum += dealer[i];
    }
    return `Player: ${playerSum}, Dealer: ${dealerSum}`;

}

let cardsResult = printSum([4, 10, 3], [3, 6, 11]);
console.log(cardsResult);

/**
 * Exercise 2.2 
 *
 * Create a function called `printResult()` that should take two variables,
 * the sum of the players hand and the sum of the dealers hand.
 *
 * Players hand should be three cards with the values: `4, 10 and 3`. The
 * dealers hand should be three card with the values: `3, 6, 11`.
 *
 * This time you should include the check from lab 2 where you find out the
 * boundaries of the player and the dealer.
 * Player hand = 21 (black jack).
 * Player hand less than 21 (safe).
 * Player hand larger than 21 (busted).
 * Dealer hand less than 17 (safe).
 * Dealer hand larger or equal to 17 and less than 21 (stop).
 * Dealer hand = 21 (black jack).
 * Delaer hand larger than 21 (busted).
 *
 * Return a string in the format: `Player: safe, Dealer: busted`.
 
 */
console.log('*** Exercise 2.2 ***');
let sum1 = 0;
let sum2 = 0;
function printResult(player, dealer) {
    for (let i = 0; i < player.length; i++) {
        sum1 += player[i];
    }
    for (let i = 0; i < dealer.length; i++) {
        sum2 += dealer[i];
    }
    if (sum1 === 21) {
        sum1 = 'black jack';
    }
    if (sum1 < 21) {
        sum1 = 'safe';

    }
    if (sum1 > 21) {
        sum1 = 'busted';
    }


    if (sum2 === 21) {
        sum2 = 'black jack';
    }
    if (sum2 < 17) {
        sum2 = 'safe';
    }
    if (sum2 >= 17 && sum2 < 21) {
        sum2 = 'stop';

    }
    if (sum2 > 21) {
        sum2 = 'busted';
    }
    return `Player: ${sum1}, Dealer: ${sum2}`;

}

let cards = printResult([4, 10, 3], [3, 6, 11]);

console.log(cards);

/**
 * Exercise 2.3 
 *
 * Create a function called `calculateInterest()` that returns the money you
 * have after x years of interest, given three arguments: `745, 31 and 5`.
 * First argument represents the start money, the second argument represents
 * the number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
  */
console.log('*** Exercise 2.3 ***');
function calculateInterest(total, numberOfYears, rate) {
    let interestRate = ((rate / 100) + 1);
    let totalInterest = (total * Math.pow(interestRate, numberOfYears));
    let rondedResult = Math.round(totalInterest * 10000) / 10000;
    return rondedResult;
}

let money = calculateInterest(745, 31, 5);

console.log(money);

