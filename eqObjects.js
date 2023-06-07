// helper function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual }] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
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


//main function 
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
 

// test 
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
 assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false)




 // test two
 const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red","blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false) // => false

module.exports = eqObjects;