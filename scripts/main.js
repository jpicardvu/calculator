function add (num1, num2) { 
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numArray) {
  return numArray.reduce( (runTotal, num) => runTotal + num, 0 );
}

function multiply (numArray) {
  return numArray.length ? numArray.reduce( (runTotal, num) => runTotal * num) : 0;
}

function power(num1, num2) {
  return num1 ** num2;
} 

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  let runTotal = 1;  
  for (i = num; i > 0; i--) {
    runTotal *= i;
  }
  return runTotal;
}

function operate(operator, num1, num2) {
// get operator from within html button string on click
  switch(operator) {
    case '+':
      add(num1,num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '×':
      multiply(num1, num2);
      break;
    case '÷':
      divide(num1, num2);
      break;
    case '^':
      exponent(num1, num2);
      break;
    case '!':
      factorial(num1, num2);
      break;
    case '%':
      percent(num1, num2);
      break;
    case '=':
      equals(num1, num2);
      break;
  }

function clearAll() {

}

function backSpace() {

}


}