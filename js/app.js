'use strict';

var scoreNumber = 1;
var message1 = prompt('Sup dude, what is your name?');



function welcomeMessage() {
  alert('Welcome ' + message1);
}
welcomeMessage();



var ready = prompt('Are you ready for the quiz?');

function takeQuiz() {


  if (ready.toLowerCase() === 'yes') {
    alert('Lets do this');
  } else if (ready.toLowerCase() === 'no') {
    alert('Go back and study');
  } else {
    alert('something went wrong');
  }
}
takeQuiz();


while ((ready === 'yes') || (ready != 'no')) {

  function firstQuestion() {
    var firstQ = prompt('Is my name Lami Beach?');

    if (firstQ.toLowerCase() === 'yes') {
      alert('Great job ' + message1 + ' That is my name!');
      alert(scoreNumber++);
    } else if ('no') {
      alert('Aww shucks, you don/t love me');
    } else {
      alert('Something went wrong')
    }
  }

  firstQuestion();


  function secondQuestion() {
    var secondQ = prompt('Did I attend Arizona State University');

    if (secondQ.toLowerCase() === 'yes') {
      alert('You are on a roll!');
      alert(scoreNumber++);
    } else if ('no') {
      alert('Yikes, I thought you were my friend!');
    } else {
      alert('Something went wrong');
    }
  }

  secondQuestion();



  function thirdQuestion() {
    var thirdQ = prompt('Was I an exotic Dancer?');

    if (thirdQ.toLowerCase() === 'yes') {
      alert('I wish!');
    } else if ('no') {
      alert('Correcto Mundo!');
      alert(scoreNumber++);
    } else {
      alert('Something went wrong');
    }
  }

  thirdQuestion();



  function fourthQuestion() {
    var fourthQ = prompt('Have I sold a screenplay yet?');

    if (fourthQ.toLowerCase() === 'yes') {
      alert('Unfortunately I have not');
    } else if ('no') {
      alert('That is correct!');
      alert(scoreNumber++);
    } else {
      alert('Something went wrong');

    }
  }

  fourthQuestion();


  function fifthQuestion() {
    var fifthQ = prompt('Do I like to party?');

    if (fifthQ.toLowerCase() === 'yes') {
      alert('Yes, ' + message1 + ' lets party!')
      alert(scoreNumber++);
    } else if ('no') {
      alert('Sorry that is wrong')
    } else {
      alert('Something went wrong')

    }
  }

  fifthQuestion();



  function sixthQuestion() {

    for (var i = 0; i < 4; i++) {

      var sixthQ = prompt('Guess a number between 1 and 10!');
      var int = 9;

      if (sixthQ == 9) {
        alert('Good job, you read my mind! ' + message1);
        alert(scoreNumber++);
        break;
      }
      else if (sixthQ < 9) {
        alert('higher')
      }
      else if (sixthQ > 9) {
        alert('lower');
      }
    }
    if (sixthQ != 9) {
      alert('The answer is 9!');
    }
  }

  sixthQuestion();



  function seventhQuestion() {

    for (var a = 0; a < 6; a++) {

      var seventhQ = prompt('What is your favorite color?');
      var colors = ['red', 'blue', 'green', 'purple'];

      if (seventhQ.toLowerCase() === colors[0] || seventhQ.toLowerCase() === colors[1] || seventhQ.toLowerCase() === colors[2] || seventhQ.toLowerCase() === colors[3]) {
        alert('Yes, that is my favorite');
        alert(scoreNumber++);
        break;
      }
      else (seventhQ.toLowerCase() != colors)
      alert('Try again');
    }
  }

  seventhQuestion();

  alert('The correct answers were: red, green, blue, and purple');


  alert('Final Score: ' + --scoreNumber);

  break;
}
