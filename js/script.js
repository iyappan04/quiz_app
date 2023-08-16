let question = [
    {
        "question": "What is Python?",
        "options": ["A.Programming language", "B.Not a Programming language", "C.Database", "D.Technology"],
        "correct": "a"
    },
    {
        "question": "What is Django?",
        "options": ["A.Frontend Framework", "B.Backend Framework", "C.Database", "D.Programming language"],
        "correct": "b"
    },
    {
        "question": "What is Not Valid Datatype in Python?",
        "options": ["A.List", "B.Tuple", "C.Set", "D.Array"],
        "correct": "d",
    },
    {
        "question": "What is Python?",
        "options": ["A.Programming language", "B.Not a Programming language", "C.Database", "D.Technology"],
        "correct": "a"
    },
    {
        "question": "What is Django?",
        "options": ["A.Frontend Framework", "B.Backend Framework", "C.Database", "D.Programming language"],
        "correct": "b"
    },
    {
        "question": "What is Not Valid Datatype in Python?",
        "options": ["A.List", "B.Tuple", "C.Set", "D.Array"],
        "correct": "d",
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
const questionCount = document.getElementById("questionCount");

const optionvalue = document.querySelectorAll(".optionvalue");

let questionNumber = count+1;

let scorecount =0;

const questiondiv = document.querySelector(".all");

function showQuestion(count){
    let currentQuestion = question[count];
    questions.textContent = currentQuestion.question;
    option1.textContent = currentQuestion.options[0];
    option2.textContent = currentQuestion.options[1];
    option3.textContent = currentQuestion.options[2];
    option4.textContent = currentQuestion.options[3];
    questionCount.textContent = questionNumber;

    
}



function deSelectInput(){
    optionvalue.forEach(optionvalue => optionvalue.checked = false)
}


function selectedOption(){
    let answer
    optionvalue.forEach(optionvalues => {
        if(optionvalues.checked) {
            answer = optionvalues.id
        }
    })
    return answer
}

function nextPage(){



    var answer = selectedOption();

    console.log(answer);

    if(answer === question[count].correct) {
        scorecount++;
        console.log(scorecount);
    }


    count++;
    deSelectInput();
    
   


    if(count>question.length-1){
        //   count=0;
            // alert("Quiz test completed.");
            // alert(scorecount);
            questiondiv.innerHTML = `
            <div>
            <h1 class="text-4xl font-bold">You score is ${scorecount}/${question.length}</h1>
            </div>
            `;
            
    }
    

  

    if(count<question.length){
        showQuestion(count);
    }


}



function previousPage(){
    count--;
    if(count<0){
    //   count= question.length-1;
        count = 0;
    }
    showQuestion(count);
}








