function analyzeArray(arr) {
  const length = arr.length;
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  const average = sum / length;
  arr.sort((a, b) => {
    return a - b;
  });
  const max = arr[length - 1];
  const min = arr[0];
  return { average, min, max, length };
}

module.exports = analyzeArray;
