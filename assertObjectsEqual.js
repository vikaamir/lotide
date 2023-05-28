// helper functions
const eqObjects = function(object1, object2) {
  // 1. creat if steatment that checkes if object1 = object2 and return true or false 
  let shirtOne = Object.keys(object1)
  let shirtTwo =  Object.keys(object2)
  if (shirtOne.length !== shirtTwo.length){
    return false
  }

  for (key of shirtOne){ // forof loop is looping throug keys
    if(Array.isArray(object1[key])){
      if(!(eqArrays(object1[key], object2[key]))){
        return false
      }
    } else if (object1[key] !== object2[key]){
      return false 
    } 
  }
  return true
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
  




//main function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
    }
};

  

// test 
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red","blue"] };
assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject)
  

