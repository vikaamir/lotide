const eqArrays = require('./eqArrays');
// function comper the twi arrays
//1. if arr1 and arr2 equle console messege pass
//2. if not console failed
//3.use eqArray to ckeck if the arrys equales 
  
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1 }] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual();

module.exports = assertArraysEqual;
