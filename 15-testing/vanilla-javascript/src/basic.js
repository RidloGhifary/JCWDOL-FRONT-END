export function sumTen(a, b) {
  return a + b + 10;
}

export function max(a, b) {
  if (isNaN(a) || isNaN(b)) return NaN;
  else if (typeof a !== "number" || typeof b !== "number") return NaN;
  else if (a === b) return a;

  return a > b ? a : b;
}

export function FizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

export function Factorial(n) {
  if (n === 0 || n === 1) return 1;
  if (typeof n !== "number") return NaN;
  if (n < 0) return NaN;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function IsPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
