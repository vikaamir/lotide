
// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// }
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}





// helper function 
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


//tests
const words = ["happy", "sad", "to", "major", "tom"];

const result = map(words, word => word[0])
console.log(result)
assertArraysEqual(result, ["h", "s", "t", "m", "t"])
// assertArraysEqual(map(words,  word => word[0]), ["h", "s", "t", "m", "t"])
assertArraysEqual(map(words, word => word.length), [5, 3, 2, 5, 3])
assertArraysEqual(map(words, word => word + "hello"), ["happyhello", "sadhello", "tohello", "majorhello", "tomhello"])