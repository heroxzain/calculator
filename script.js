// Basic Functions 
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b; // (b===0 ? 1 : b);
let modulus = (a, b) => a % b;
let result = 0;
let a = 0, b = 0, operator;

// getting dom elements
let screen = document.querySelector(".screen");
let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
// let equal = document.querySelector(".equal");
let cross = document.querySelector("#cross");
let clear = document.querySelector("#clear");
let dot = document.querySelector(".dot");

// calculate the result
function operate(a, b, operator) {
    let temp = operator;
    operator = undefined;
    switch(temp) {
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
        case '%': return modulus(a,b);
    }
}

// Working of each button
digits.forEach(button => {
    button.addEventListener("click", (e) => {
        let digit = e.target.id;
        if (operator === undefined) {
            a += digit;
            screen.textContent = +a;
        } else {
            b += digit;
            screen.textContent = `${+a} ${operator} ${+b}`;
        }
    });
});

operators.forEach(button => {
    button.addEventListener("click", (e) => {
        operator = e.target.id;
    });
});