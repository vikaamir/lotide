const flatten = function(nested){
  let flatten = []
  for(let i = 0 ; i <nested.length; i++){
    if(typeof nested[i] == "number" ){
      flatten.push(nested[i])

    } else {
      for( let y = 0; y < nested[i].length; y++){
        flatten.push(nested[i][y])
      }

    }

  } 
  return flatten
}




const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1 }] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3 , 4, 5 ,6])