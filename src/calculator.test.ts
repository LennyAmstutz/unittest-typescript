import {add, divide, multiply, subtract} from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test('multiply four by five is twenty', () => {
  // Arrange
  const a = 4;
  const b = 5;
  const expected = 20;

  // Act
  const result = multiply(a, b);

  // Assert
  expect(result).toBe(expected);
});

test('divide ten by two is five', () => {
  const a = 10;
  const b = 2;
  const expected = 5;

  const result = divide(a, b);

  expect(result).toBe(expected);
});

test('divide by zero should throw error', () => {
  expect(() => divide(10, 0)).toThrowError('Division by zero is not allowed.');
});
