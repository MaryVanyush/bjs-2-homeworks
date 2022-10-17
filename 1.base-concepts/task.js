'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
    if (d === 0) {
      arr = [-b/(2*a)];
    } else if (d > 0) {
      arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
    } 
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
    if (isNaN(percent)) {
      return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(contribution)) {
      return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    } else if (isNaN(amount)) {
      return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    } 
    let S = amount - contribution;
    let dateNow = new Date();
    let n = Math.trunc((date - dateNow)/2592000000);
    let P = 1/12 * (percent/100);
    let monthAmount = S*(P + (P/(((1 + P)**n) - 1)));
    totalAmount = Number((n*monthAmount).toFixed(2));
    console.log(totalAmount);
  
  return totalAmount;
}
