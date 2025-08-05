//Goal: 
/*
    - The div with class .display, will just be a display for the user
    - For the backend logic, the actual variables will be used 
    - DON'T TAKE VALUES OF VARIABLES FROM THE DISPLAY DIV
    - Store each value and operator entered by user in a seperate backend logic inside vairables 
       (forget about div display, it is just a display for the user, not for us programmers)
*/
let a=0, b, op, result;

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
/* Old Logic of the above function:
        op = e.target.id;
        display.textContent += op;
        a = display.textContent;

        a = a.slice(0, a.indexOf(op));
        b = display.textContent;
        b = b.slice(b.indexOf(op)+1);
        if(b == "") {b=0;} 
        else {b = b.slice(0, b.indexOf(op));}
        a = Number(a);
        b = Number(b);
        display.textContent = operate(op, a, b) + op;
*/

equal.addEventListener("click", (e) => {
    b = display.textContent;
    b = Number(b.slice((b.indexOf(op)+1)));
    display.textContent = operate(op, a, b);
});

ac.addEventListener("click", (e) => {
    display.textContent = 0
});
clear.addEventListener("click", (e) => {
    let str = display.textContent;
    display.textContent = str.substring(0, str.length-1);
    console.log(display.textContent.length);
    if(display.textContent == "") {
        display.textContent = 0; }
});


/*************************************************************************/
// New Logic
// numbers.forEach(number => {
//     number.addEventListener("click", (e) => {
//         a += e.target.id;
//         printall(e.target.id);
//     });
// });

// operators.forEach(operator => {
//     operator.addEventListener("click", (e) => {
//         op = e.target.id;
//         temp = b;
//         b = Number(a);
//         a = 0;
//         operate(op, temp, b);
//         print(result + op);        
//     });
// });

// function print(text){
//     display.textContent = text;
// }

// function printall(text){
//     if(display.textContent==="0") print(text);
//     else display.textContent += text;
// }
