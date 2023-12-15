const digits = document.querySelectorAll('.digits');
const operation = document.querySelectorAll('.operation');
const input = document.querySelector('#input');
const result = document.querySelector('#result');

const period = document.querySelector('.period');
const remove = document.querySelector('.delete');
const ac = document.querySelector('.ac');
const equal = document.querySelector('.equal');

let operationClicked = false;
let numberClicked = false;
let dotClicked = true;

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    input.innerText += digit.innerText;
    operationClicked = true;
  });
});

operation.forEach((op) => {
  op.addEventListener('click', () => {
    if (operationClicked) {
      input.innerText += op.innerText;
      operationClicked = false;
      dotClicked = true;
    }
  });
});

period.addEventListener('click', () => {
  if (dotClicked) {
    input.innerText += period.innerText;
    dotClicked = false;
  }
});

ac.addEventListener('click', () => {
  input.innerText = '';
  result.innerText = '0';
  operationClicked = false;
  numberClicked = false;
  dotClicked = true;
});

remove.addEventListener('click', () => {
  input.innerText = input.innerText.slice(0, input.innerText.length - 1);
});

equal.addEventListener('click', () => {
  result.innerText = Math.round(eval(input.innerText) * 1000) / 1000;
});
