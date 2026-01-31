// Basic Functions 
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b; // (b===0 ? 1 : b);
let modulus = (a, b) => a % b;
let result = 0;
let a, b, operator;

// getting dom elements
let screen = document.querySelector(".screen");


// calculate the result
function operate(a, b, operator) {
    switch(operator) {
        case '+': return add(a,b);
        case '-': return subtract(a,b);
        case '*': return multiply(a,b);
        case '/': return divide(a,b);
        case '%': return modulus(a,b);
    }
}