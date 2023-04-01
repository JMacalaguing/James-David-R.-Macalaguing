
let button = document.getElementById('add').addEventListener('click', add);
button =document.getElementById("times").addEventListener("click", times);
button =document.getElementById("minus").addEventListener("click", minus);
button =document.getElementById("divide").addEventListener("click", divide);

function add () {
  
    let num1= Number(document.getElementById("NumberOne").value);
    let num2 = Number (document.getElementById("Numbertwo").value);
    let result = num1+num2;
     answer = document.getElementById("answer")
     answer.innerHTML = result;
    }

function times () {
  
    let num1= Number(document.getElementById("NumberOne").value);
    let num2 = Number (document.getElementById("Numbertwo").value);
    let result = num1*num2;
    answer = document.getElementById("answer")
    answer.innerHTML = result;
     }
function minus () {s
  
    let num1= Number(document.getElementById("NumberOne").value);
    let num2 = Number (document.getElementById("Numbertwo").value);
    let result = num1-num2;
    answer = document.getElementById("answer")
    answer.innerHTML = result;
     }
function divide (){
    let num1= Number(document.getElementById("NumberOne").value);
    let num2 = Number (document.getElementById("Numbertwo").value);
    let result = num1/num2;
    answer = document.getElementById("answer")
    answer.innerHTML = result;
}
  
  



