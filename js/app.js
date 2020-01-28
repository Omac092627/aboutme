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

<<<<<<< HEAD
  function firstQuestion() {
    var firstQ = prompt('Is my name Lami Beach?');
=======
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
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834

    if (firstQ.toLowerCase() === 'yes') {
      alert('Great job ' + message1 + ' That is my name!');
      alert(scoreNumber++);
    } else if ('no') {
      alert('Aww shucks, you don/t love me');
    } else {
      alert('Something went wrong')
    }
  }
  
  }
firstQ();

<<<<<<< HEAD
  firstQuestion();

=======
function secondQ() {
  var secondQuestion = prompt('Did I attend Arizona State University');

  if (secondQuestion.toLowerCase() === 'yes') {
    alert('You are on a roll!');
    alert(scoreNumber++);
    console.log('You are on a roll');
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834

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
}
secondQ();

<<<<<<< HEAD
  secondQuestion();

=======
function thirdQ() {
  var thirdQuestion = prompt('Was I an exotic Dancer?');
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834


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
}
thirdQ();

<<<<<<< HEAD
  thirdQuestion();

=======
function fourthQ() {
  var fourthQuestion = prompt('Have I sold a screenplay yet?');
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834


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
}
fourthQ();

<<<<<<< HEAD
  fourthQuestion();

=======
function fifthQ() {
  var fifthQuestion = prompt('Do I like to party?');

  if (fifthQuestion.toLowerCase() === 'yes') {
    alert('Yes, ' + welcomeMessage + ' lets party!')
    alert(scoreNumber++);
    console.log('Yes, ' + welcomeMessage + ' lets party!');
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834

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
}
fifthQ();

<<<<<<< HEAD
  fifthQuestion();


=======
function sixthQ() {
  for (var i = 0; i < 4; i++) {
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834

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

<<<<<<< HEAD
  sixthQuestion();
=======
  if (sixthQuestion != 9) {
    alert('The answer is 9!');
  }
}
sixthQ();

function seventhQ() {
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834



<<<<<<< HEAD
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
=======
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

>>>>>>> f52547eaad6f55967911e5565be0e55af4763834

  alert('The correct answers were: red, green, blue, and purple');


  alert('Final Score: ' + --scoreNumber);
<<<<<<< HEAD

  break;
}
=======
  console.log('displays final score');
  break;
}
>>>>>>> f52547eaad6f55967911e5565be0e55af4763834
