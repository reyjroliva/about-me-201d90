'use strict'

console.log('hey world heyyyy')

let score = 0;
let visitorName = prompt('Howdy, what is your name?');
alert(`Nice name. Welcome to my site, ${visitorName}! Please answer the following questions with yes or no.`);

let questionOneReply = prompt('Am I over 30?').toUpperCase();
if(questionOneReply === 'Y' || questionOneReply === "YES") {
  alert('Nope, not quite.')
} else if (questionOneReply === 'N' || questionOneReply === 'NO') {
  alert('That\'s right!');
  score++;
}

let questionTwoReply = prompt('Do I have cats?').toUpperCase();
if(questionTwoReply === 'Y' || questionTwoReply === "YES") {
  alert('That\'s right!');
  score++;
} else if (questionTwoReply === 'N' || questionTwoReply === 'NO') {
  alert('Incorrect.')
}

let questionThreeReply = prompt('Do I live in Seattle?').toUpperCase();
if(questionThreeReply === 'Y' || questionThreeReply === "YES") {
  alert('That\'s right!');
  score++;
} else if (questionThreeReply === 'N' || questionThreeReply === 'NO') {
  alert('Incorrect.')
}

let questionFourReply = prompt('Have I run a marathon before?').toUpperCase();
if(questionFourReply === 'Y' || questionFourReply === "YES") {
  alert('That\'s right!');
  score++;
} else if (questionFourReply === 'N' || questionFourReply === 'NO') {
  alert('Incorrect.')
}

let questionFiveReply = prompt('Can I play the piano?').toUpperCase();
if(questionFiveReply === 'Y' || questionFiveReply === "YES") {
  alert('Not at all, but I do keep one by my desk incase I ever want to try.')
} else if (questionFiveReply === 'N' || questionFiveReply === 'NO') {
  alert('That\'s right!');
  score++;
}

let correctNumber = 9;
let guessNumber = 0;
let numberGuessesLeft = 4;
while(guessNumber !== correctNumber && numberGuessesLeft > 0) {
  let questionSixReply = prompt('I\'m thikning of a number 1-10. Guess the number!');
  numberGuessesLeft--;

  guessNumber = parseInt(questionSixReply);
  if(guessNumber > correctNumber) { 
    alert('Too high');
  } else if (guessNumber < correctNumber) {
    alert('Too low!');
  } else {
    alert('Correct!');
    score++;
    numberGuessesLeft = 0;
  }
  
  if(guessNumber !== correctNumber && numberGuessesLeft === 0) {
    alert(`The correct number was ${correctNumber}`);
  }
}

let favoriteFruitArray = ['apples', 'bananas', 'oranges', 'grapes', 'mangos', 'pineapples'];
let fruitGuessesLeft = 6;
while(fruitGuessesLeft > 0) {
  let questionSevenReply = prompt('Can you guess my favorite fruit? The answer ends with an \'s\'').toLowerCase();
  fruitGuessesLeft--;
  
  for(let i = 0; i < favoriteFruitArray.length; i++) {
    if(questionSevenReply === favoriteFruitArray[i]) {
      alert('Correct!')
      score++;
      fruitGuessesLeft = 0;
    }
  }

  if(fruitGuessesLeft === 0) {
    alert(`all the possible answers were ${favoriteFruitArray}`)
  }
}

alert(`Thanks for playing, ${visitorName}! Your score was ${score}/7!`);