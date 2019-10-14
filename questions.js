// user call-to-action to 'start quiz' which initiates timed-quiz

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
}



// added var questions that use an array to retrieve the answer

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



