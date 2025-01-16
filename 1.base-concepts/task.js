"use strict"
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return [];
  }
  else if (d == 0) {
    return [-b / (2 * a)];
  }
  else if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let platej = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  let sum = platej * countMonths;
  sum = Math.round(sum * 100) / 100;
  return sum;
} 