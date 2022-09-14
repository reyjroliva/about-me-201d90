'use strict'

console.log('hey world heyyyy')

let visitorName = prompt('Howdy, what is your name?');
alert(`Nice name. Welcome to my site, ${visitorName}! Please answer the following questions with yes or no.`);

let questionOneReply = prompt('Am I over 30?').toUpperCase();
if(questionOneReply === 'Y' || questionOneReply === "YES") {
  alert('Nope, not quite.')
} else if (questionOneReply === 'N' || questionOneReply === 'NO') {
  alert('That\'s right!');
}

let questionTwoReply = prompt('Do I have cats?').toUpperCase();
if(questionTwoReply === 'Y' || questionTwoReply === "YES") {
  alert('That\'s right!');
} else if (questionTwoReply === 'N' || questionTwoReply === 'NO') {
  alert('Incorrect.')
}

let questionThreeReply = prompt('Do I live in Seattle?').toUpperCase();
if(questionThreeReply === 'Y' || questionThreeReply === "YES") {
  alert('That\'s right!');
} else if (questionThreeReply === 'N' || questionThreeReply === 'NO') {
  alert('Incorrect.')
}

let questionFourReply = prompt('Have I run a marathon before?').toUpperCase();
if(questionFourReply === 'Y' || questionFourReply === "YES") {
  alert('That\'s right!');
} else if (questionFourReply === 'N' || questionFourReply === 'NO') {
  alert('Incorrect.')
}

let questionFiveReply = prompt('Can I play the piano?').toUpperCase();
if(questionFiveReply === 'Y' || questionFiveReply === "YES") {
  alert('Not at all, but I do keep one by my desk incase I ever want to try.')
} else if (questionFiveReply === 'N' || questionFiveReply === 'NO') {
  alert('That\'s right!');
}

alert(`I hope you got them all right. Thanks for playing, ${visitorName}!`);