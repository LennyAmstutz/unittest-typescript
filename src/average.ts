export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate mean of empty list.');
  }
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate median of empty list.');
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}
