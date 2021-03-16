// Only change code bellow this line

function randomRangeNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

randomRangeNumber(2, 25);
console.log(randomRangeNumber(2, 7));
// Only change code above this line
module.exports = randomRangeNumber;
