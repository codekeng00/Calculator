export function add(left, right) {
  return left + right;
}

export function subtract(left, right) {
  return left - right;
}

export function multiply(left, right) {
  return left * right;
}

export function power(base, exponent) {
  return base ** exponent;
}

export function divide(left, right) {
  if (right === 0) throw new RangeError('Cannot divide by zero.');
  return left / right;
}

export function remainder(left, right) {
  if (right === 0) throw new RangeError('Cannot calculate remainder with zero.');
  return left % right;
}

export function average(left, right) {
  return (left + right) / 2;
}

export function minimum(left, right) {
  return Math.min(left, right);
}

export function calculate(operation, left, right) {
  switch (operation) {
    case 'add': return add(left, right);
    case 'subtract': return subtract(left, right);
    case 'multiply': return multiply(left, right);
    case 'divide': return divide(left, right);
    case 'power': return power(left, right);
    case 'remainder': return remainder(left, right);
    case 'average': return average(left, right);
    case 'minimum': return minimum(left, right);
    default: throw new Error('Unknown operation');
  }
}
