// Set timer to start quiz
var totalSeconds = 75;
var minutes = parseInt(totalSeconds/75);
var seconds = parseInt(totalSeconds%75);
function showTime () {
document.getElementById("showTime").innerHTML = "Time Remaining: " + seconds + " seconds";
if(totalSeconds <=0){
    setTimeout("document.quiz.submit()", 1);
} else {
    totalSeconds = totalSeconds -1;
    minutes = parseInt(totalSeconds/75);
    seconds = parseInt(totalSeconds%75);
   setTimeout("showTime()", 1000);
}}
setTimeout("showTime()", 1000);

// Add var questions that use an array to retrieve the answer
var questions = [{
    question: "1. Commonly used data types DO NOT include:",
    choiceList: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
}, {
    question: "2. The condition in an if / else statement is enclosed within ____.",
    choiceList: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
}, {

    question: "3. How can a value be appended to an array?",
    choiceList: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of the these options"],
    correctAnswer: 1
}, {
    question: "4. What will the following code output to the console.log? console.log(1 + '2' + '2');",
    choiceList: ["'122'", "'5'", "'32'", "'14'"],
    correctAnswer: 2
}, {

}, {
    question: "5. What two functions do you use to add an element at the beginning and the end of an array?",
    choiceList: ["unshift,push", "push,unshift", "first,push", "unshift,last"],
    correctAnswer: 0
}];

/* The following code prevents timer from running / need to debug.

// Create get function
function get(questions); {
    return document.getElementById(questions);
}

// Create function to render # of questions answered correctly
function correctAnswer () {
    questions = get("questions");
    if(position >= questions.length) {
        questions.innerHTML = "You got "+correctAnswer+" of "+questions.length+" questions correct.";
        get("questions").innerHTML = "Test completed";
// Restart var to allow user to restart the test
    position =0;
    correct = 0;
// Stop function that renders # of questions when test is completed
    return false;
    }
get(questions).innerHTML = "Question "+(position+1)+" of "+questions.length;
questions - questions[position][0];
choiceList = questions[position][1];
choiceList = questions[position][2];
choiceList = questions[position][3];
choiceList = questions[position][4];
questions.innerHTML = "+questions";
// Add selectors and augmented notation  shortcut += to append to data entered above
questions.innerHTML += "<input type='radio' name='choiceList' value='A'> "+choiceList+"<br>";
questions.innerHTML += "<input type='radio' name='choiceList' value='B'> "+choiceList+"<br>";
questions.innerHTML += "<input type='radio' name='choiceList' value='C'> "+choiceList+"<br>";
questions.innerHTML += "<input type='radio' name='choiceList' value='D'> "+choiceList+"<br>";
}


// Check answer function

function correctAnswer() {
// Use getElementByName to loop through array
    choiceList = docume.getElementByName("choicelIst");
    for(var i=0; i<choiceList.length; i++) {
        choiceList = choiceList[i].value;
    }
}
// Use if/else statements to see if answer matches correct choice
if(choiceList == questions[position] [4]) {
    correct++; // increase value for correct # of questions
    position++; // changes position of character user is on
    renderQuestion(); // function to render or go to the next question

window.addEventListener("load", renderQuestion, false);
}
*/


// The following code was extracted to be possibly used at a later time:

/* User call-to-action to 'start quiz' which initiates timed-quiz

// Code Begins here:
var timeElement = document.querySelector(".time");
var quizElement = document.getElementById(".quiz");

var secondsLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = secondsLeft + " quiz over!";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
} */

    var count = 15;
    // call setInterval
    var tmer = setInterval(function() {
        console.log(count);
        if (count === 0) {
            stopInterval()
        }
    }, 1000);

    var stopInterval = function() {
        console.log("Time Is Up!");
        clearInterval(timer);
    }