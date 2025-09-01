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