const eqArrays = require('./eqArrays'); 
 

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
module.exports = eqObjects;