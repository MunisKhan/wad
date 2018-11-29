var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "What is the Capital of Pakistan?",
    choices : [ "Lahore",
        "Islamabad",
        "Karachi",
        "none of the above"],
    correctAnswer : 1
},{
    question : "Who is the president of America?",
    choices : [ "Donald Trump",
        "George Bush",
        "Osama Bin Laden",
        "none of the above"],
    correctAnswer : 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
     var ans=document.querySelector("input[type=radio]:checked");
	 if(ans==null)
	 {
		  var msg_relay = document.getElementById("quiz-message");
    msg_relay.style.color = 'red';
    msg_relay.style.display = "block";
    msg_relay.innerText = "No option was Selected";
	 }
	currentQuestion++;
	displayCurrentQuestion();
}

function displayCurrentQuestion() {
      document.getElementById("question").innerHTML = questions[currentQuestion].question;
	  for(var i=0;i<questions[currentQuestion].choices.length;i++)
	  {
		document.getElementById("choice-list").innerHTML +='<li><input type="radio" name="one" value="">' + questions[currentQuestion].choices[i] + '</li>';  
	  }
	  
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}