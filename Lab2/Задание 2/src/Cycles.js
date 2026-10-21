export function rangeSum(start, end) {
  let sum = 0;
  const start_real = Math.min(start, end);
  const end_real = Math.max(start, end);
  for (let i = start_real; i <= end_real; ++i) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
export function iterationCount(a) {
  let count = 0;
  let current = a;
  while (current > 0.1) {
    current /= 2;
    ++count;
  }
  return count;
}
export function symbolsReplace(message) {
  if (!message) return '';
  let result = '';
  let i = 0;
	do {
	  if ((i + 1) % 3 === 0) {
      result += '_';
    } else {
      result += message[i];
    }
      ++i;
	} while (message[i])
  return result;
}
