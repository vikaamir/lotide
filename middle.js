const assertArraysEqual = require('./assertArraysEqual'); 
const eqArrays = require('./eqArrays'); 

// actual function
const middle = function(arr){ //[1, 34, 98, 4, 5]    
  let len = arr.length // 5
  if(len === 1 || len === 2){
    return []
  } else if (len % 2 === 1){
     let middelIndex = Math.floor(len / 2)
     return [arr[middelIndex]]
  } else { 
    let index = len / 2;
    return [arr[index - 1], arr[index]]
  }
}
module.exports = middle;
