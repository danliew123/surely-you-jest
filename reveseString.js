function reverseString(string) {
  const arr = string.split("");
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  const reversedString = reversedArr.join("");
  return reversedString;
}

module.exports = reverseString;
