// Only change code bellow this line

var sum = 0;

function addThree() {
  sum = sum + 3;
  console.log(sum);
  console.log("The sum from addThree:", sum);
}

function addFive() {
  sum = sum + 5;
  console.log(sum);
  console.log("The sum from addFive:", sum);
}

addThree();
addFive();
// Only change code above this line

module.exports = {
  addThree,
  addFive,
};
