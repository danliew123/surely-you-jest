function caesarCipherize(string, shift) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let arr = string.split("");
  let cipherArr = [];

  arr.forEach((char) => {
    if (/^[a-zA-Z()]+$/.test(char)) {
      if (isUpperCase(char)) {
        let index = alphabet.indexOf(char.toLowerCase());
        let shiftedIndex;
        if (index + shift > alphabet.length - 1) {
          shiftedIndex = index + shift - (alphabet.length - 1) - 1;
          cipherArr.push(alphabet[shiftedIndex].toUpperCase());
        } else {
          shiftedIndex = index + shift;
          cipherArr.push(alphabet[shiftedIndex].toUpperCase());
        }
      } else {
        let index = alphabet.indexOf(char);
        let shiftedIndex;
        if (index + shift > alphabet.length - 1) {
          shiftedIndex = index + shift - (alphabet.length - 1) - 1;
          cipherArr.push(alphabet[shiftedIndex]);
        } else {
          shiftedIndex = index + shift;
          cipherArr.push(alphabet[shiftedIndex]);
        }
      }
    } else {
      cipherArr.push(char);
    }
  });

  let cipher = cipherArr.join("");
  return cipher;
}

function isUpperCase(string) {
  return string === string.toUpperCase();
}

module.exports = caesarCipherize;
