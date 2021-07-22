function fibonacci(num) {
  var placeholder = 0;
  var lastNum = 0;
  var currentNum = 0;
  for (var i = 0; i <= num; i++) {
    if (currentNum == 0) {
      currentNum = 1;
    } else {
      placeholder = currentNum;
      currentNum = lastNum + currentNum;
      lastNum = placeholder;
    }
  }
  return lastNum;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
