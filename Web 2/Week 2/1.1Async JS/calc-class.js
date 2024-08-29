class calculator {
  constructor(num1, num2, res) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sum() {
    return this.num1 + this.num2;
  }
  sub() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  div() {
    return this.num1 / this.num2;
  }
}
const calc = new calculator(1, 2);
const sum = calc.sum();
console.log(sum);
