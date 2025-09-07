
let displayValue = '';
let firstNumber = null;
let operator = null;
let shouldResetDisplay = false;

const calcDisplay = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const percentButton = document.querySelector("#percent");
const decimalButton = document.querySelector("#dot");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (shouldResetDisplay) {
            displayValue = '';
            shouldResetDisplay = false;
        }
        displayValue += button.textContent;
        calcDisplay.textContent = displayValue;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber !== null && operator !== null && displayValue) {
            const secondNumber = parseFloat(displayValue);
            const result = operate(firstNumber, operator, secondNumber);
            calcDisplay.textContent = result;
            firstNumber = result;
        } else {
            firstNumber = parseFloat(displayValue);
        }

        operator = button.textContent;
        shouldResetDisplay = true; 
    });
});


equalButton.addEventListener('click', () => {
    if (firstNumber === null || operator === null || !displayValue) {
        return;
    }

    const secondNumber = parseFloat(displayValue);
    const result = operate(firstNumber, operator, secondNumber);
    calcDisplay.textContent = result;
    
    displayValue = result.toString();
    firstNumber = null;
    operator = null;
    shouldResetDisplay = true; 
});

clearButton.addEventListener('click', () => {
    displayValue = '';
    firstNumber = null;
    operator = null;
    
    calcDisplay.textContent = '0';
});

deleteButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    calcDisplay.textContent = displayValue || '0';
});

percentButton.addEventListener('click', () => {
    if (displayValue) {
        displayValue = (parseFloat(displayValue) / 100).toString();
        calcDisplay.textContent = displayValue;
    }
});

decimalButton.addEventListener('click', () => {
    if (shouldResetDisplay) {
        displayValue = '0';
        shouldResetDisplay = false;
    }
    
    if (displayValue.includes('.')) {
        return;
    }
    
    displayValue += '.';
    calcDisplay.textContent = displayValue;
});

function add(x, y) {
    return x+y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    if(y == 0) {
        return "Error";
    } else {
        return x/y;
    }
}

function operate(a, operator, b) {
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            break;
    }
}
