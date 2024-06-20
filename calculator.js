export default class Calculator {
  constructor() {}
  add(num1, num2) {
    return Number((num1 + num2).toFixed(1));
  }
  subtract(num1, num2) {
    return Number((num1 - num2).toFixed(1));
  }
  divide(num1, num2) {
    return Number((num1 / num2).toFixed(1));
  }
  multiply(num1, num2) {
    return Number((num1 * num2).toFixed(1));
  }
}
