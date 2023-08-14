let question = [
    {
        "question": "What is Python?",
        "options": ["Programming language", "Not a Programming language", "Database", "Technology"]
    },
    {
        "question": "What is Django?",
        "options": ["Frontend Framework", "Backend Framework", "Database", "Programming language"]
    },
    {
        "question": "What is Not Valid Datatype in Python?",
        "options": ["List", "Tuple", "Set", "Array"]
    },
]


let count = 0;

const totalQuestions = document.querySelector(".totalQuestions");

window.addEventListener("DOMContentLoaded", function(){
    showQuestion(count);
    totalQuestions.textContent = question.length;
})

const questions = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");


const optionvalue1 = document.querySelector(".optionvalue1");
const optionvalue2 = document.querySelector(".optionvalue2");
const optionvalue3 = document.querySelector(".optionvalue3");
const optionvalue4 = document.querySelector(".optionvalue4");


function showQuestion(count){
    let currentQuestion = question[count];
    questions.textContent = currentQuestion.question;
    option1.textContent = currentQuestion.options[0];
    option2.textContent = currentQuestion.options[1];
    option3.textContent = currentQuestion.options[2];
    option4.textContent = currentQuestion.options[3];

    optionvalue1.value = currentQuestion.options[0];
    optionvalue2.value = currentQuestion.options[1];
    optionvalue3.value = currentQuestion.options[2];
    optionvalue4.value = currentQuestion.options[3];

    
}


function nextPage(){

    const questionValue = document.getElementById("optionvalue").value;
    console.log(questionValue);

    count++;
    if(count>question.length-1){
    //   count=0;
        alert("Quiz test completed.")
    }
    showQuestion(count);

}



function previousPage(){
    count--;
    if(count<0){
    //   count= question.length-1;
        count = 0;
    }
    showQuestion(count);
}







var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;


  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

}, 1000);