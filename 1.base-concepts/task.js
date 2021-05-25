function solveEquation(a, b, c) {
  let arr = [];
  
  let d = b**2 - 4*a*c;
  let d2 = Math.sqrt(d);

  if (d > 0) {
    arr[0] = (-b + d2) / (2 * a);
    arr[1] = (-b - d2) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  console.log(typeof(contribution));
  
  if (+contribution < 0) {
    console.log(`Параметр первоначальный взнос содержит неправильное значение ${contribution}`);
  } else if (+amount < 0) {
    console.log(`Параметр сумма кредита содержит неправильное значение ${amount}`);
  } else if (+contribution > +amount) {
    console.log(`Проверьте параметры сумма кредита и первоначального взноса`);
  } else {
    let p = percent / 100 / 12;
    let s = amount - contribution;
  
    let now = new Date(); // текущая дата
    let duration = (date - now)/86400000/(365/12); // время между текущей датой и датой окончания кредита с переводом в месяцы
    let d = Math.trunc(duration);
    
    monthAmount = s * (p + p / (((1 + p)**d) - 1));
    totalAmount = +(monthAmount * d).toFixed(2);
  }

  return totalAmount;
}
