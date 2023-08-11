

// let count = 1;

// let next = document.querySelector(".next");

// let counter = document.querySelector(".count");



// next.addEventListener("click", function(){

//     counter++;
// })


// let counter = document.querySelector("#counter")
// let count = 0;
// setInterval(() => {
//     counter.innerHTML += count;
//     count++;
// }, interval);



// localStorage.setItem("counter", count);



// let seconds = 120;
// setInterval(() => {
//     document.getElementById("decreSecond").innerText = seconds;
//     seconds--;
//     if(seconds<1){
//         seconds = 0;
//     }
// }, 1000);


// var count = 0;  


// setInterval(() => {

//     localStorage.setItem("counter", count) || count++;
//     document.getElementById("counter").innerHTML = localStorage.getItem("counter");
//     count++;

// }, 1000);



// setInterval(() => {
//     document.getElementById("time").innerHTML = Date.now();
// }, 1000);
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

// const obj = JSON.parse(question);

// console.log(obj);

console.log(question[1]);

let questions = document.querySelector(".questions");

let next = document.querySelector(".next");



// next.addEventListener("click", function(){
//     for(let i=0;i<=question.length;i++){
//         questions.innerHTML += `  
//             <div class="question">
//                 <div class="flex flex-col px-6 py-4">
//                     <h3 class="text-2xl font-bold">${question[i].question}</h3>
//                 </div>
//                 <div class="flex flex-col px-12 gap-2">
//                     <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
//                         <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
//                         <p class="text-xl">${question[i].options[0]}</p>
//                     </div>
//                     <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
//                         <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
//                         <p class="text-xl">${question[i].options[1]}</p>
//                     </div>
//                     <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
//                         <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
//                         <p class="text-xl">${question[i].options[2]}</p>
//                     </div>
//                     <div class="flex items-center gap-4 hover:bg-indigo-500 px-2 py-2">
//                         <input type="radio" name="" id="" class="w-6 h-6 border border-indigo-500">
//                         <p class="text-xl">${question[i].options[3]}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
// })


let count = 0;

next.addEventListener("click", function(){
        questions.innerHTML += `  
            <div class="question">
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
})