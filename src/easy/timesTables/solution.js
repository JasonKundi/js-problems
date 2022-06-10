// times tables

// how are we gunna display this information?
// initially function can take an argument i.e number
// then loop through multiplications of 1 -12
// return that list in a string

const timesTables = (number) => {
  let tablesArray = [];
  for (let i = 1; i <= 12; i++) {
    const calculation = i * number;
    const result = `${i} * ${number} = ${calculation}`;
    tablesArray.push(result);
  }
  return tablesArray;
};

const displayTimesTable = timesTables(1);
console.log(displayTimesTable);
