// Given a number, count the number of digits. For example:
//
// ```text
// 318 = 3
// 92563 = 5
// 4666 = 4
// 314890 = 6
// ```

const digitCount = (number) => {
  const text = number.toString();
  console.log(text)
  const letterCount = text.split("").length;
  console.log(letterCount);
  return letterCount;
};

const test = digitCount(318);
