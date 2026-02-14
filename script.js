// Basic Functions 
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if (b === 0) {
        alert("Enter a valid expression");
        return 0;
    }
    return a / b;
}
let modulus = (a, b) => a % b;
let result = 0;
let a = 0, b = 0, operator;

// getting dom elements
let screen = document.querySelector(".screen");
let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
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
        if (e.target.id === "=") {
            if (b !== 0) {
                result = operate(+a, +b, operator).toFixed(2);
                screen.textContent = `${+result}`;
                a = b = result = 0;
                operator = undefined;
            }
        } else {
            if (operator === undefined) operator = e.target.id;
            if (b === 0) {
                screen.textContent = `${+a} ${e.target.id}`;
            } else {
                result = operate(+a, +b, operator).toFixed(2);
                a = result;
                b = result = 0;
                screen.textContent = `${+a} ${e.target.id}`;
            }
            operator = e.target.id;
        }
    });
});

function refresh() {
    a = b = result = 0;
    screen.textContent = "0";
    operator = undefined;
}

clear.addEventListener("click", refresh);

function erase(m) {
    screen.textContent = screen.textContent.split("").slice(0, m).join("");
}

cross.addEventListener("click", () => {
    if (a == 0)
        refresh();
    else if (operator === undefined) { // a!=0
        a = a.split("").slice(0, -1).join("");
        if (a == 0) refresh();
        else erase(-1);
    } else if (b == 0) { // op == defined
        operator = undefined;
        erase(-2);
    } else { // b != 0
        b = b.split("").slice(0, -1).join("");
        erase(-1);
    }
});