'use strict';

var scoreNumber = 1;



var welcomeMessage = prompt('Sup dude, what is your name?');
alert('Welcome ' + welcomeMessage);
console.log('Welcome');



var takeQuiz = prompt('Are you ready for the quiz?');

if (takeQuiz.toLowerCase() === 'yes') {
  alert('lets do this');
  console.log('Ready!');


} else if (takeQuiz.toLowerCase() === 'no') {
  alert('Study!');
  console.log('They not ready');


} else {
  alert('Something went wrong');
  console.log('something went wrong');

}



while (takeQuiz.toLowerCase() === 'yes') {
  console.log('My code only runs when the person is ready');

  function firstQ() {

  var firstQuestion = prompt('Is my name Lami Beach?');

  if (firstQuestion.toLowerCase() === 'yes') {
    alert('Great job ' + welcomeMessage + ' That is my name!');
    alert(scoreNumber++);
    console.log('Great job ' + welcomeMessage + ' That is my name!');
  } else if ('no') {
    alert('Aww shucks, you don/t love me');
    console.log('wrong answer');

  } else {
    alert('Something went wrong')
    console.log('Something went wrong');

  }
  
  }
firstQ();

function secondQ() {
  var secondQuestion = prompt('Did I attend Arizona State University');

  if (secondQuestion.toLowerCase() === 'yes') {
    alert('You are on a roll!');
    alert(scoreNumber++);
    console.log('You are on a roll');

  } else if ('no') {
    alert('Yikes, I thought you were my friend!');
    console.log('Yikes, I thought you were my friend!');

  } else {
    alert('Something went wrong');
    console.log('Something went wrong');

  }
}
secondQ();

function thirdQ() {
  var thirdQuestion = prompt('Was I an exotic Dancer?');

  if (thirdQuestion.toLowerCase() === 'yes') {
    alert('I wish!');
    console.log('I wish!');

  } else if ('no') {
    alert('Correcto Mundo!');
    alert(scoreNumber++);
    console.log('Correcto Mundo!');

  } else {
    alert('Something went wrong');
    console.log('Something went wrong');
  }
}
thirdQ();

function fourthQ() {
  var fourthQuestion = prompt('Have I sold a screenplay yet?');

  if (fourthQuestion.toLowerCase() === 'yes') {
    alert('Unfortunately I have not');
    console.log('Unfortunately I have not');

  } else if ('no') {
    alert('That is correct!');
    alert(scoreNumber++);
    console.log('That is correct');

  } else {
    alert('Something went wrong');
    console.log('Something went wrong');

  }
}
fourthQ();

function fifthQ() {
  var fifthQuestion = prompt('Do I like to party?');

  if (fifthQuestion.toLowerCase() === 'yes') {
    alert('Yes, ' + welcomeMessage + ' lets party!')
    alert(scoreNumber++);
    console.log('Yes, ' + welcomeMessage + ' lets party!');

  } else if ('no') {
    alert('Sorry that is wrong')
    console.log('Sorry that is wrong');

  } else {
    alert('Something went wrong')
    console.log('Something went wrong');

  }
}
fifthQ();

function sixthQ() {
  for (var i = 0; i < 4; i++) {

    var sixthQuestion = prompt('Guess a number between 1 and 10!');
    var int = 9;

    if (sixthQuestion == 9) {
      alert('Good job, you read my mind! ' + welcomeMessage);
      alert(scoreNumber++);
      console.log('good job');
      break;
    }

    else if (sixthQuestion < 9) {
      alert('higher')
      console.log('higher');
    }

    else if (sixthQuestion > 9) {
      alert('lower');
      console.log('lower');
    }

  }

  if (sixthQuestion != 9) {
    alert('The answer is 9!');
  }
}
sixthQ();

function seventhQ() {

  for (var a = 0; a < 6; a++) {

    var seventhQuestion = prompt('What is your favorite color?');
    var colors = ['red', 'blue', 'green', 'purple'];

    if (seventhQuestion.toLowerCase() === colors[0] || seventhQuestion.toLowerCase() ===  colors[1] || seventhQuestion.toLowerCase() === colors[2] || seventhQuestion.toLowerCase() ===  colors[3]) {
      alert('Yes, that is my favorite');
      alert(scoreNumber++);
      console.log('correct answer');
      break;
    }  else (seventhQuestion.toLowerCase() != colors)
    alert('Try again'); 
    console.log('Try again');
  }
}
seventhQ();


  alert('The correct answers were: red, green, blue, and purple');
  console.log('list of correct colors');


  alert('Final Score: ' + --scoreNumber);
  console.log('displays final score');
  break;
}