export function arraySorting(data) {
  const numbers = data.split(',').map(Number);
  numbers.sort((a, b) => a - b);
  return numbers.join(',');
}
export function arrayFiltering(data) {
  return data.filter(num => num <= 100);
}
export function arrayPushing(array1, array2) {
  const res = [];
  for (let i = 0; i < 5; ++i) {
    res.push(array1[i]);
	res.push(array2[i]);
  }
  return res;
}
