const assertEqual = require('./assertEqual');
// comper if the arrays number are equales returm true or false
// loop to check if the value are equal return true or false
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;