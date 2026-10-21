export function personUpdate(data) {
  if (data.gender === 'female') {
    delete data.age;
  } else if (data.gender === 'male') {
    if (!data.hasOwnProperty('income')) {
      data.income = 100000;
    }
  }
  return data;
}
export function objectFieldsList(obj1, obj2, obj3) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys3 = Object.keys(obj3);
  const allKeys = keys1.concat(keys2, keys3);
  const uniqueKeys = [];
  allKeys.forEach(key => {
    if (!uniqueKeys.includes(key)) {
      uniqueKeys.push(key);
    }
  });
  return uniqueKeys.sort();
}
export function objectClone(obj, count) {
  const result = [];
  for (let i = 0; i < count; ++i) {
    const clone = structuredClone(obj);
    clone.id = i;
    result.push(clone);
  }
  return result;
}