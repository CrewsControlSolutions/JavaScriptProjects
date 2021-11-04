//keep a record of input values by using this global variable
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
};

//modify values each time a button is clicked
function inputDigit(digit) {
    const { displayValue, waitSecondOperand } = calculator;
    //if a key is clicked, then display that key in the calculator
    if (waitSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitSecondOperand = false;
    }
    else {
        //replace the displayed value if it is a '0' of type string with the user's entered digit, otherwise add onto the displayed value. This is an example of a ternary operator.
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

//handle decimal points
function inputDecimal(dot) {
    //prevent accidental clicking of the decimal point from causing bugs
    if (calculator.waitSecondOperand === true) return;
    //add decimal point to display if it is not yet displayed
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

//control operators entered by user
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    //when an operator key is pressed, the displayed value on the screen is converted to a number of type float
    const valueOfInput = parseFloat(displayValue);
    //check if an operator alraeady exists and if the second operand is true. If so, update the operator and exit the function.
    if (operator && calculator.waitSecondOperand) {
        calculator.operator = nextOperator;
        calculator.firstOperand = valueOfInput;
        return;
    }
    if (firstOperand == null) {
        calculator.firstOperand = valueOfInput;
    }
    //check if an operator already exists
    else if (operator) {
        const valueNow = firstOperand || 0;
        //call on the function that performs the calculation by performing a property lookup on the function for the specified operator type and passing the first and second entered operands
        let result = performCalculation[operator](valueNow, valueOfInput);
        //add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        //remove any trailing 0's
        result = (result * 1).toString();
        calculator.displayValue = parseFloat(result);
        calculator.displayOperand = parseFloat(result);
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}

// update the screen with the most recent value
function updateDisplay() {
    const display = document.querySelector('.calculatorScreen');
    display.value = calculator.displayValue;
}

updateDisplay();

//monitor button clicks
const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    // the target variable is an object that represents the element that was clicked
    const { target } = event;
    // if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    // clear the display and reset the calculator if user selected AC
    if (target.classList.contains('allClear')) {
        calculatorReset();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
})