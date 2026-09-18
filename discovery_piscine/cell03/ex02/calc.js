const calcForm = document.getElementById('calcForm');
const leftInput = document.getElementById('leftNum');
const operatorSelect = document.getElementById('operator');
const rightInput = document.getElementById('rightNum');

function isPositiveInteger(value) {
  return /^\d+$/.test(value.trim());
}

calcForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const leftVal = leftInput.value;
  const rightVal = rightInput.value;
  const operator = operatorSelect.value;

  if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
    alert('Error :(');
    return;
  }

  const left = parseInt(leftVal, 10);
  const right = parseInt(rightVal, 10);

  if ((operator === '/' || operator === '%') && right === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = left + right;
      break;
    case '-':
      result = left - right;
      break;
    case '*':
      result = left * right;
      break;
    case '/':
      result = left / right;
      break;
    case '%':
      result = left % right;
      break;
  }

  alert(result);
  console.log(result);
});

setInterval(() => {
  alert('Please, use me...');
}, 30000);