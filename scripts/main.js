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