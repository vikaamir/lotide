// helper functions 
const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } 
  for ( let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1 }] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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


// tests
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])