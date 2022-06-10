// 5 judges - score 1-10
// scores biased
//low threshold = 2
// high threshold = 8

const ratingsAdjuster = (ratings, minThreshold, maxThreshold) => {
  // todo
  // loop through array, if less than lowest threshold, i.e 1
  // change that to 2
  //if above high threshold i.e 9, change that to 8
  // update array of scores
  let newRatings = [...ratings];

  for (let i = 0; i < newRatings.length; i++) {
    if (ratings[i] < minThreshold) {
      newRatings[i] = minThreshold;
    } else if (ratings[i] > maxThreshold) {
      newRatings[i] = maxThreshold;
    }
  }
  return newRatings;
};

let ratings = [1, 3, 5, 7, 9];
let minThreshold = 2;
let maxThreshold = 8;

console.log(ratingsAdjuster(ratings, minThreshold, maxThreshold));
