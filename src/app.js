import { calculate } from './calculator.js';

const display = document.querySelector('#display');
const leftInput = document.querySelector('#left');
const rightInput = document.querySelector('#right');

document.querySelector('.operations').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-operation]');
  if (!button) return;

  try {
    const result = calculate(button.dataset.operation, Number(leftInput.value), Number(rightInput.value));
    display.textContent = String(result);
    display.setAttribute('aria-live', 'polite');
  } catch (error) {
    if (!(error instanceof RangeError)) throw error;
    display.textContent = error.message;
    display.setAttribute('aria-live', 'assertive');
  }
});
