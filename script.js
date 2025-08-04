let a, b, choosen;

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(operator, a, b){
    switch(operator){
        case "+": return add(a, b); break;
        case "-": return subtract(a, b); break;
        case "*": return multiply(a, b); break;
        case "/": return divide(a, b); break;
        default : display.textContent = "Something went wrong";
    }
}

let numbers = document.querySelectorAll(".numbers > *");
let display = document.querySelector(".display");
let operators = document.querySelectorAll(".operators > *");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let ac = document.querySelector(".allClear");

numbers.forEach(number => {
    number.addEventListener("click", (e)=> {
        (display.textContent == 0) ? 
        display.textContent = e.target.id :
        display.textContent += e.target.id;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        op = e.target.id;
        a = Number(display.textContent);
        display.textContent += op;
    });
});

equal.addEventListener("click", (e) => {
    b = display.textContent;
    b = Number(b.slice((b.indexOf(op)+1)));
    display.textContent = operate(op, a, b);
});

ac.addEventListener("click", (e) => display.textContent = 0);
clear.addEventListener("click", (e) => {
    let str = display.textContent;
    display.textContent = str.substring(0, str.length-1);
    if(display.textContent == "") display.textContent = 0;
});
