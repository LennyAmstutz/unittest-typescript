import {mean, median} from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 4];
  const expected: number = 2.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test('mean of five numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const expected = 3;
  const result = mean(numbers);
  expect(result).toBe(expected);
});

test('mean of no numbers should throw error', () => {
  expect(() => mean([])).toThrowError('Cannot calculate mean of empty list.');
});

test('median for odd number of elements', () => {
  const numbers = [3, 1, 2];
  const expected = 2;
  const result = median(numbers);
  expect(result).toBe(expected);
});

test('median for even number of elements', () => {
  const numbers = [4, 1, 2, 3];
  const expected = 2.5;
  const result = median(numbers);
  expect(result).toBe(expected);
});

test('median for no elements should throw error', () => {
  expect(() => median([])).toThrowError('Cannot calculate median of empty list.');
});
