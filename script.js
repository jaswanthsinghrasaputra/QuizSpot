var ansArray = [];
const CorrectArray = [0,2,0,2,3];
var ansblock
var quiz
let score = 0
var QuestionOne = document.getElementById("question0")
function startQuiz(){
    document.getElementById("buttonsdiv").style.visibility = "visible";
    document.getElementById("subhead").style.display="none";
    document.getElementById("startbutton").style.display="none";
    QuestionOne.style.display = "block";
    document.getElementById("question2").style.display="none";
    document.getElementById("question1").style.display="none";
    document.getElementById("question3").style.display="none";
    document.getElementById("question4").style.display="none";
}
 function questiononevisible(){
    QuestionOne.style.display = "block";
    document.getElementById("question2").style.display="none";
    document.getElementById("question1").style.display="none";
    document.getElementById("question3").style.display="none";
    document.getElementById("question4").style.display="none";
 }
 function questiontwovisible(){
    document.getElementById("question0").style.display="none";
    document.getElementById("question2").style.display="none";
    document.getElementById("question3").style.display="none"
    document.getElementById("question1").style.display="block";
    document.getElementById("question4").style.display="none";
 }
 function questionthreevisible(){
    document.getElementById("question2").style.display="block";
    document.getElementById("question1").style.display="none";
    document.getElementById("question0").style.display="none";
    document.getElementById("question3").style.display="none";
    document.getElementById("question4").style.display="none";
 }

 function questionfourvisible() {
    document.getElementById("question3").style.display="block";
    document.getElementById("question1").style.display="none";
    document.getElementById("question0").style.display="none";
    document.getElementById("question2").style.display="none";
    document.getElementById("question4").style.display="none";
 }
 function questionfivevisible() {
    document.getElementById("question3").style.display="none";
    document.getElementById("question1").style.display="none";
    document.getElementById("question0").style.display="none";
    document.getElementById("question2").style.display="none";
    document.getElementById("question4").style.display="block";
 }
function ansCheck(buttonNumber){
    quiz = buttonNumber
    for(i=0 ; i<5 ; i++){
        if(document.forms[buttonNumber].elements[i].checked){
            ansArray[buttonNumber] = i
        }
    }
    ansblock = "ansblock"+buttonNumber;
    if(ansArray[buttonNumber]==CorrectArray[buttonNumber])
    {
         score++
         document.getElementById(ansblock).style.visibility = "visible";
         document.getElementById(ansblock).innerHTML="😊 Correct 😊";
         document.getElementById(ansblock).style.backgroundColor = "green"
         document.getElementById(ansblock).style.fontWeight= "900"
    }
    else
        {
         document.getElementById(ansblock).style.visibility = "visible";
         document.getElementById(ansblock).innerHTML="😒 Wrong 😒";
         document.getElementById(ansblock).style.fontWeight= "900"
    }
}
    function nextQuestion(questionNumber) {
        var currentQuestionElement = document.getElementById("question" + questionNumber);
        if (currentQuestionElement) {
            currentQuestionElement.style.display = "none";
            questionNumber++;
            var nextQuestionId = "question" + questionNumber;
            var nextQuestionElement = document.getElementById(nextQuestionId);
            if (nextQuestionElement) {
                nextQuestionElement.style.display = "block";
            }
        }
    }
function finalScore(){
    let message 
    document.getElementById("question4").style.display ="none"
    document.getElementById("subhead").style.display = "block"
    document.getElementById("buttonone").style.display = "none"
    document.getElementById("buttontwo").style.display = "none"
    document.getElementById("buttonthree").style.display = "none"
    document.getElementById("buttonfour").style.display = "none"
    document.getElementById("buttonfive").style.display = "none"
    document.getElementById("text").innerHTML = "Thank you "
    if(score<=5){
    alert("Are you sure to exit from quiz! , And ready to see your score !!")
    if(score <= 2 ){
        message = "🥺 Better Luck Next Time 🥺"
    }
    else if(score > 2 && score <= 3 ){
        message = "🎊 Good Job 🎊 "
    }
    else if(score > 3 && score <= 4 ){
        message = "🍾 Excellent 🍾 "
    }
    else{
        message = "🎉 OutStanding 🎉 "
    }
    document.getElementById("subhead").innerHTML = message + ", you scored :-     " +score+ "/5";
     }
    }