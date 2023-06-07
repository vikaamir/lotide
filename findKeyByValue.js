const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual }] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

const eqArrays = function(arr1, arr2) {

  if (arr1 != arr2) {
    return false;
  } 
  for ( let i = 0; i < arr1; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true
};

const findKeyByValue =function(obj, value){
  //1.forin loop to give the key
  //2.if to check if (obj[key=value])
  for(const key in obj){
    if(obj[key] === value){
      return key;
    }

  } 
  return undefined
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
// helper function 


//text 
