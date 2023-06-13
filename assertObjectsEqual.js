const eqObjects = require('./eqObjects'); 

//main function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {// check if actual is what expected
      console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
    } else { // if not 
      console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
    }
};

assertObjectsEqual();

module.exports = assertObjectsEqual;
