'use strict';

var scoreNumber = 1;



var welcomeMessage = prompt('Sup dude, what is your name?');
alert('Welcome ' + welcomeMessage);



var takeQuiz = prompt('Are you ready for the quiz?');

if (takeQuiz.toLowerCase() === 'yes') {
  alert('Aw yeah, lets do this!');
  //console.log('Aw yeah, lets dow this!')

} else if ('no') {
  alert('Try again');
  end;
  //console.log('Try again')

} else {
  alert('Something went wrong');
}


var firstQuestion = prompt('Is my name Lami Beach?');

if (firstQuestion.toLowerCase() === 'yes') {
  alert('Great job ' + welcomeMessage + ' That is my name!');
  alert(scoreNumber++);
  //console.log('Great job ' + welcomeMessage + ' That is my name!')
} else if ('no') {
  alert('Aww shucks, you don/t love me');
  //console.log('Aww shucks, you don/t love me')

} else {
  alert('Something went wrong')
}


var secondQuestion = prompt('Did I attend Arizona State University');

if (secondQuestion.toLowerCase() === 'yes') {
  alert('You are on a roll!');
  alert(scoreNumber++);
  //console.log('You are on a roll')

} else if ('no') {
  alert('Yikes, I thought you were my friend!');
  //console.log('Yikes, I thought you were my friend!')

} else {
  alert('Something went wrong');
}


var thirdQuestion = prompt('Was I an exotic Dancer?');

if (thirdQuestion.toLowerCase() === 'yes') {
  alert('I wish!');
  //console.log('I wish!')

} else if ('no') {
  alert('Correcto Mundo!');
  alert(scoreNumber++);
  //console.log('Correcto Mundo!')

} else {
  alert('Something went wrong');
}


var fourthQuestion = prompt('Have I sold a screenplay yet?');

if (fourthQuestion.toLowerCase() === 'yes') {
  alert('Unfortunately I have not');
  //console.log('Unfortunately I have not')

} else if ('no') {
  alert('That is correct!');
  alert(scoreNumber++);
  //console.log('That is correct')

} else {
  alert('Something went wrong');
}


var fifthQuestion = prompt('Do I like to party?');

if (fifthQuestion.toLowerCase() === 'yes') {
  alert('Yes, ' + welcomeMessage + ' lets party!')
  alert(scoreNumber++);
  //console.log('Yes, ' + welcomeMessage + ' lets party!')

} else if ('no') {
  alert('Sorry that is wrong')
  //console.log('Sorry that is wrong')

} else {
  alert('Something went wrong')
}


//console.log('sixthQuestion' + 'Guess a number between 1 and 10!');

for (var i = 0; i < 4; i++) {

  var sixthQuestion = prompt('Guess a number between 1 and 10!');
  var int = 9;

  if (sixthQuestion == 9) {
    alert('Good job, you read my mind! ' + welcomeMessage);
    alert(scoreNumber++);
    break;
  }

  else if (sixthQuestion < 9) {
    alert('higher')
  }

  else if (sixthQuestion > 9) {
    alert('lower');

  }

}

if (sixthQuestion != 9) {
  alert('The answer is 9!');
}

for (var a = 0; a < 6; a++) {

  var seventhQuestion = prompt('What is your favorite color?');
  var colors = ['red', 'blue', 'green', 'purple'];

  if (seventhQuestion === colors[0]) {
    alert('Yes, that is my favorite');
    alert(scoreNumber++);
    break;

  } else if (seventhQuestion === colors[1]) {
    alert('Yes, I love the color blue');
    alert(scoreNumber++);
    break;

  } else if (seventhQuestion === colors[2]) {
    alert('Oh yeah, green is the best');
    alert(scoreNumber++);
    break;

  } else if (seventhQuestion === colors[3]) {
    alert('Purple rhymes with Urkle, you are correct');
    alert(scoreNumber++);
    break;
  }

  else (seventhQuestion != colors)
  alert('Try again');
}


alert('The correct answers were: red, green, blue, and purple');


alert('Final Score: ' + --scoreNumber);
