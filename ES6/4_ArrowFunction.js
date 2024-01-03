const square = function (number) {
  return number * number;
};
console.log(square(5));

//! Now we can re-write it as

const arrowSquare = (number) => {
  return number * number;
};

console.log(arrowSquare(6));

//! now more shorter

const arrowSquareShort = (number) => number * number;
console.log(arrowSquareShort(7));

//! now more more shorter
// const arrowSquareShorter = number => number * number;
