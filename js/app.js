'use strict';

var scoreNumber = 1;
var message1 = prompt('Sup dude, what is your name?');



function welcomeMessage() {
  alert('Welcome ' + message1);
}
welcomeMessage();
console.log('Welcome');



var ready = prompt('Are you ready for the quiz?');
//above is global variable, that way if the user isn't ready, the code stops//

function takeQuiz() {


  if (ready.toLowerCase() === 'yes') {
    alert('Lets do this');
    console.log('they ready');
  } else if (ready.toLowerCase() === 'no') {
    alert('Go back and study');
    console.log('they not ready');
  } else {
    alert('something went wrong');
  }
}
takeQuiz();
console.log('Ready or nah?')


while ((ready === 'yes') || (ready != 'no')) {

  function firstQuestion() {
    var firstQ = prompt('Is my name Lami Beach?');

    if (firstQ.toLowerCase() === 'yes') {
      alert('Great job ' + message1 + ' That is my name!');
      alert(scoreNumber++);
      console.log('Great job ' + message1 + ' That is my name!');
    } else if ('no') {
      alert('Aww shucks, you don/t love me');
      console.log('wrong answer');
    } else {
      alert('Something went wrong')
      console.log('Something went wrong');
    }
  }

  firstQuestion();
  console.log('firstQuestion called');


  function secondQuestion() {
    var secondQ = prompt('Did I attend Arizona State University');

    if (secondQ.toLowerCase() === 'yes') {
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

  secondQuestion();
  console.log('second question called');



  function thirdQuestion() {
    var thirdQ = prompt('Was I an exotic Dancer?');

    if (thirdQ.toLowerCase() === 'yes') {
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

  thirdQuestion();
  console.log('third question called');



  function fourthQuestion() {
    var fourthQ = prompt('Have I sold a screenplay yet?');

    if (fourthQ.toLowerCase() === 'yes') {
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

  fourthQuestion();
  console.log('fourth question called');


  function fifthQuestion() {
    var fifthQ = prompt('Do I like to party?');

    if (fifthQ.toLowerCase() === 'yes') {
      alert('Yes, ' + message1 + ' lets party!')
      alert(scoreNumber++);
      console.log('Yes, ' + message1 + ' lets party!');
    } else if ('no') {
      alert('Sorry that is wrong')
      console.log('Sorry that is wrong');
    } else {
      alert('Something went wrong')
      console.log('Something went wrong');

    }
  }

  fifthQuestion();
  console.log('fifth question called');



  function sixthQuestion() {

    for (var i = 0; i < 4; i++) {

      var sixthQ = prompt('Guess a number between 1 and 10!');
      var int = 9;

      if (sixthQ == 9) {
        alert('Good job, you read my mind! ' + message1);
        alert(scoreNumber++);
        console.log('good job');
        break;
      }
      else if (sixthQ < 9) {
        alert('higher')
        console.log('higher');
      }
      else if (sixthQ > 9) {
        alert('lower');
        console.log('lower');
      }
    }
    if (sixthQ != 9) {
      alert('The answer is 9!');
    }
  }

  sixthQuestion();
  console.log('sixth question called');



  function seventhQuestion() {

    for (var a = 0; a < 6; a++) {

      var seventhQ = prompt('What is your favorite color?');
      var colors = ['red', 'blue', 'green', 'purple'];

      if (seventhQ.toLowerCase() === colors[0] || seventhQ.toLowerCase() === colors[1] || seventhQ.toLowerCase() === colors[2] || seventhQ.toLowerCase() === colors[3]) {
        alert('Yes, that is my favorite');
        alert(scoreNumber++);
        console.log('correct answer');
        break;
      }
      else (seventhQ.toLowerCase() != colors)
      alert('Try again');
      console.log('Try again');
    }
  }

  seventhQuestion();
  console.log('sevent question called');

  alert('The correct answers were: red, green, blue, and purple');
  console.log('list of correct colors');


  alert('Final Score: ' + --scoreNumber);
  console.log('displays final score');

  break;
}
