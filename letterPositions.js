const letterPositions = function(sentence) {
  const results = {}; // 1.create empty object
  for (let i = 0; i < sentence.length; i++) {//2. for loop through array
    let letter = sentence[i];//3.curent letter
    if (letter !== " ") {//4. skiping the white space
      if (results[letter]) {//5.if letter alredy in the object
        results[letter].push(i);//6.push the index in to array
      } else { //7. if letter is not in the object
        results[letter] = [i];//8. creat an array with the index in it
      }
    }
  }
  return results;
};


  
//helper functions
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1 }] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};
  
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






//tests
console.log(letterPositions("lighthouse in the house"));
let testSen = letterPositions("lighthouse in the house");

assertArraysEqual(testSen["h"], [3, 5, 15, 18]);
assertArraysEqual(testSen["e"], [9, 16, 22]);
assertArraysEqual(testSen["u"],  [7, 20]);
assertArraysEqual(testSen["t"], [4, 14]);
module.exports = letterPositions;
