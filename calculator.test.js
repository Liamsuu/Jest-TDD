import Calculator from "./calculator";

describe("Test Calculator Addition Method", () => {
  const calc = new Calculator();
  test("Positive number addition", () => {
    expect(calc.add(1, 2)).toBe(3);
  });
  test("Positive with negative number addition", () => {
    expect(calc.add(-5, 4)).toBe(-1);
  });
  test("Two negative number addition", () => {
    expect(calc.add(-3, -2)).toBe(-5);
  });
  test("Adding numbers with decimals", () => {
    expect(calc.add(2.5, 2.6)).toBe(5.1);
  });
});

describe("Test Calculator Subtraction Method", () => {
  const calc = new Calculator();
  test("Positive number subtraction", () => {
    expect(calc.subtract(5, 2)).toBe(3);
  });
  test("Positive with negative number subtraction", () => {
    expect(calc.subtract(-5, 4)).toBe(-9);
  });
  test("Two negative number subtraction", () => {
    expect(calc.subtract(-3, -2)).toBe(-1);
  });
  test("Subtracting numbers with decimals", () => {
    expect(calc.subtract(2.5, 2.6)).toBe(-0.1);
  });
});

describe("Test Calculator Divide Method", () => {
  const calc = new Calculator();
  test("Positive number division", () => {
    expect(calc.divide(5, 2)).toBe(2.5);
  });
  test("Positive with negative number division", () => {
    expect(calc.divide(-5, 4)).toBe(-1.3);
  });
  test("Two negative number division", () => {
    expect(calc.divide(-3, -2)).toBe(1.5);
  });
  test("Dividing numbers with decimals", () => {
    expect(calc.divide(2.5, 2.6)).toBe(1);
  });
});

describe("Test Calculator Multiply Method", () => {
  const calc = new Calculator();
  test("Positive number multiplication", () => {
    expect(calc.multiply(5, 2)).toBe(10);
  });
  test("Positive with negative number multiplication", () => {
    expect(calc.multiply(-5, 4)).toBe(-20);
  });
  test("Two negative number multiplication", () => {
    expect(calc.multiply(-3, -2)).toBe(6);
  });
  test("Multiplying numbers with decimals", () => {
    expect(calc.multiply(2.5, 2.7)).toBe(6.8);
  });
});
