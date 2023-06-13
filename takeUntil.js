const assertArraysEqual = require('./assertArraysEqual');
//1. function with array and callback
//2.looping the array to unting the callback 
//3. pusing the rest of the array 
//4. return the result 

const takeUntil = function(array, callback) {
  const results = [];
  for(let item of array){
    if(callback(item)){
      break;
    }
    results.push(item);
  }
  return results;
};
takeUntil()

module.exports = takeUntil;

