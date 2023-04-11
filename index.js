let welcomeEl = document.getElementById("welcome-el")

let user = "CHARLNZ  ";

const greeting = "Welcome back ";

function welcome(){
     welcomeEl.innerHTML = greeting + user;
     welcomeEl.innerHTML += " 👍"; 
}

welcome();



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;


 function incremented(){
    count += 1
   document.getElementById("count-el").innerText = count
   
 }
incremented();


function save(){
     let saveStr = count + " - ";
    console.log(saveEl.textContent += saveStr)
     
    countEl.innerText = 0
    count = 0;

}

save();