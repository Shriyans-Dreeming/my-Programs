const numberInput = document.querySelector('.number');
const symbolInput = document.querySelector('.symbol');
const secondNumberInput = document.querySelector('.secondNumber');
const calculateButton = document.querySelector('.submit');
const realAnswerElement = document.querySelector('.realAnswer');
const errorElement = document.querySelector('.error');

function calculate() {
  const numberValue = numberInput.value.trim();
  const symbolValue = symbolInput.value.trim();
  const secondNumberValue = secondNumberInput.value.trim();

  if (numberValue === '' || symbolValue === '' || secondNumberValue === '' || isNaN(numberValue) || isNaN(secondNumberValue)) {
    errorElement.style.display = 'block';

    // hide the error message after 2 seconds
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 2000);
  } else {
    let result;

    if (symbolValue === '+') {
      result = Number(numberValue) + Number(secondNumberValue);
    } else if (symbolValue === '-') {
      result = Number(numberValue) - Number(secondNumberValue);
    } else if (symbolValue === '*') {
      result = Number(numberValue) * Number(secondNumberValue);
    } else if (symbolValue === '/') {
      if (Number(secondNumberValue) === 0) {
        errorElement.textContent = 'Cannot divide by zero';
        errorElement.style.display = 'block';

        // hide the error message after 2 seconds
        setTimeout(() => {
          errorElement.style.display = 'none';
        }, 2000);

        return;
      }
      result = Number(numberValue) / Number(secondNumberValue);
    } else {
      errorElement.textContent = 'Invalid operator';
      errorElement.style.display = 'block';

      // hide the error message after 2 seconds
      setTimeout(() => {
        errorElement.style.display = 'none';
      }, 2000);

      return;
    }

    realAnswerElement.textContent = result;
  }
}

calculateButton.addEventListener('click', calculate);