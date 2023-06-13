const assertArraysEqual = require('./assertArraysEqual'); 
const eqArrays = require('./eqArrays'); 

//1. for the middke we need chck if the arrays is even or odd
//2.when we have just one element or 2 should return empty array
//3.if number is odd returning the middle number
//4.if number is even returning the 2 middel numbers
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
