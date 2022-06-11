// 1.6km === 2miles

const kilometresToMiles = (km) => {
  let kilometer = km;
  let miles = kilometer / 1.6;
  let conversion = Math.round(miles);

  return conversion;
};

const result = kilometresToMiles(5);
console.log(result);
