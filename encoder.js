module.exports = function encoder(inputString) {
  let encodedStr = '';
  let currentChar = inputString[0];
  let count = 1;

  for (let i = 1; i < inputString.length; i++) {
    if (inputString[i] === currentChar) {
      count++;
    } else {
      encodedStr += currentChar + count;
      currentChar = inputString[i];
      count = 1;
    }
  }

  encodedStr += currentChar + count;
  return encodedStr;
};