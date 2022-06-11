// Given a sentence, capitalise the first letter and add a full stop to the end.
//  However, if the sentence already ends with some form of puncutation, leave it as is.

let string = "jack bauer is the best agent";

const makeSentence = (string) => {
  const capitalStr = string.charAt(0).toUpperCase() + string.slice(1);
  let fullStop;
  if (capitalStr.charAt(capitalStr.length - 1) != ".") {
    fullStop = capitalStr + ".";
  }
  return fullStop;
};

const test = makeSentence(string);
console.log(test);
