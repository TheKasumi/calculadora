let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let result = null;

function press(num) {
  currentInput += num;
  display.textContent = currentInput;
}

function setOP(op) {
  if (currentInput === '') return;

  if (result === null) {
    result = parseFloat(currentInput);
  } else {
    calculate(); // Calcular el resultado anterior antes de establecer un nuevo operador
  }

  operator = op;
  currentInput = ''; // Limpiar para la siguiente entrada
}

function calculate() {
  if (operator === null || currentInput === '') return;

  let secondOperand = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result += secondOperand;
      break;
    case '-':
      result -= secondOperand;
      break;
    case '*':
      result *= secondOperand;
      break;
    case '/':
      if (secondOperand !== 0) {
        result /= secondOperand;
      } else {
        display.textContent = 'Error';
        clearAll(); // Limpiar al encontrar un error
        return;
      }
      break;
    default:
      return;
  }

  display.textContent = result;
  currentInput = ''; // Preparar para la siguiente operación
}

function clr() {
  currentInput = '';
  result = null;
  operator = null;
  display.textContent = '0';
}

// Llama a clearAll al cargar la página para inicializar
clr();

