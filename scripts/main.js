let num1 = '';
let num2 = '';
let operator;
let finalized;

const screenContent = document.querySelector('#screen-content');
const buttons = document.querySelectorAll('.number-buttons, .operator-buttons1, .operator-buttons2');

buttons.forEach( (button) => {  
  button.addEventListener('click', () => {
    const choice = button.textContent;
    
    //if (button.classList.contains('select')) {
    //  console.log('a');
    //  button.classList.remove('select');
    //}
    //button.classList.add('select');

    if ( finalized === true && isNaN(choice) ) {
      num1 = operate(operator, num1, num2);
      num2 = '';
      finalized = false;
      screenContent.textContent = num1;
      operator = choice;
    }
    else if ( isNaN(choice) && num1 ) {
      operator = choice;
    }
    else if (!operator) {
      num1 = '' + num1 + choice;
      screenContent.textContent = num1;
    }
    else if (operator) {
      num2 = '' + num2 + choice;
      screenContent.textContent = num2;
    }

    if (operator && num1 && num2) {
      finalized = true;
    }

  })
})

function operate(operator, num1, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  switch(operator) {       
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '×':
      return multiply(num1, num2);
    case '÷':
      return divide(num1, num2);
    case '^':
      return exponent(num1, num2);
    case '%':
      return percent(num1);
    case '!':
      return factorial(num1);
    }
}  
  
add = (num1, num2) => num1 + num2;1
subtract = (num1, num2) => num1 - num2;
multiply = (num1, num2) => num1 * num2;
divide = (num1, num2) => num1 / num2;
exponent = (num1, num2) => num1 ** num2;
percent = (num1) => (num1 * 0.01) + '%';

function factorial(num1) {
  if (num1 === 0) {
    return 1;
  }
  let runningTotal = 1;  
  for (i = num1; i > 0; i--) {
    runningTotal *= i;
  }
  return runningTotal;
}

function clearAll() {

}

function backSpace() {

}