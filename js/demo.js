

let count = 1;

let next = document.querySelector(".next");

let counter = document.querySelector(".count");



next.addEventListener("click", function(){
    counter++;
})


let counter = document.querySelector("#counter")
let count = 0;
setInterval(() => {
    counter.innerHTML += count;
    count++;
}, interval);



localStorage.setItem("counter", count);



let seconds = 120;
setInterval(() => {
    document.getElementById("decreSecond").innerText = seconds;
    seconds--;
    if(seconds<1){
        seconds = 0;
    }
}, 1000);


var count = 0;  


setInterval(() => {

    localStorage.setItem("counter", count) || count++;
    document.getElementById("counter").innerHTML = localStorage.getItem("counter");
    count++;

}, 1000);



setInterval(() => {
    document.getElementById("time").innerHTML = Date.now();
}, 1000);



const obj = JSON.parse(question);

console.log(obj);

next.addEventListener("click", function(){
    for(let i=0;i<=question.length;i++){
        questions.innerHTML += `  
            <div class="question">
                <div class="flex flex-col px-6 py-4">
                    <h3 class="text-2xl font-bold">${question[i].question}</h3>
                </div>
                <div class="flex flex-col px-12 gap-2">
                    <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                        <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                        <p class="text-xl">${question[i].options[0]}</p>
                    </div>
                    <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                        <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                        <p class="text-xl">${question[i].options[1]}</p>
                    </div>
                    <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                        <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                        <p class="text-xl">${question[i].options[2]}</p>
                    </div>
                    <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                        <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                        <p class="text-xl">${question[i].options[3]}</p>
                    </div>
                </div>
            </div>
        `;
    }
})


let count = 0;
let questionsCount = 2;

let currentPage = 1;
const totalPages = question.length+1;

function showPage(pageNumber) {
  document.querySelectorAll('.question').forEach((page) => {
    page.classList.remove('active');
  });

  document.getElementById(`question${pageNumber}`).classList.add('active');
  currentPage = pageNumber;
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }

    let questions = document.querySelector(".questions");
    questions.innerHTML += `  
    <div class="question hidden" id="question${questionsCount}">
        <div class="flex flex-col px-6 py-4">
            <h3 class="text-2xl font-bold">${question[count].question}</h3>
        </div>
        <div class="flex flex-col px-12 gap-2">
            <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                <p class="text-xl">${question[count].options[0]}</p>
            </div>
            <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                <p class="text-xl">${question[count].options[1]}</p>
            </div>
            <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                <p class="text-xl">${question[count].options[2]}</p>
            </div>
            <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
                <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
                <p class="text-xl">${question[count].options[3]}</p>
            </div>
        </div>
    </div>
    `;
    count++;
    questionsCount++;
}

function previousPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}

showPage(currentPage);