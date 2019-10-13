// user call-to-action to 'start quiz' which initiates timed-quiz

// added var questions that use an array to retrieve the answer

var questions = [{
    question: "1. Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 3
}, {
    question: "2. The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
}, {

    question: "3. How can a value be appended to an array?",
    choices: ["arr(length).value;", "arr[arr.length]=value;", "arr[]=add(value);", "None of the these options"],
    correctAnswer: 1
}, {
    question: "4. What will the following code output to the console.log? console.log(1 + '2' + '2');",
    choices: ["'122'", "'5'", "'32'", "'14'"],
    correctAnswer: 2
}, {

}, {
    question: "5. What two functions do you use to add an element at the beginning and the end of an array?",
    choices: ["unshift,push", "push,unshift", "first,push", "unshift,last"],
    correctAnswer: 0
}];

// navigation to view high scores

// 

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

